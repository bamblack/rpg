import { Direction, Room, Dungeon1TileSetIndex, Player, RoomType, Dungeon1TileSetIndexWallWeights } from '../models';
import { getGameHeight, getGameWidth } from '../utils';

export const ROOM_SCENE_KEY = 'ROOM';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: ROOM_SCENE_KEY
};
const roomTileWidth = 23;
const roomTileHeight = 13;
const tileSize = 48;
const groundLayerName = 'groundLayer';
const stuffLayerName = 'stuffLayer';

export interface IRoomSceneConfig {
    source: Room,
    player: Player,
    entranceDirection?: Direction
};

export class RoomScene extends Phaser.Scene {
    private entranceDirection?: Direction;
    private groundLayer?: Phaser.Tilemaps.DynamicTilemapLayer;
    private stuffLayer?: Phaser.Tilemaps.DynamicTilemapLayer;
    private player?: Player;

    constructor() {
        super(sceneConfig);
    }

    ////////////////////////////
    // Built-in Scene Methods //
    ////////////////////////////
    public init(): void {
        // TODO
    }

    public preload(): void {
        this.load.image('tiles', 'assets/img/tilesheets/dungeon-1.png');
        this.load.spritesheet('player', 'assets/img/spritesheets/rogue.png', { frameWidth: 30, frameHeight: 30 });

        this.scale.on('resize', (gameSize: { gameWidth: number, gameHeight: number }) => {
            const currentX = this.groundLayer?.x ?? 0;
            const currentY = this.groundLayer?.y ?? 0;
            const currentPlayerX = this.player?.sprite?.x ?? 0;
            const currentPlayerY = this.player?.sprite?.y ?? 0;

            const layerXY = this.getRoomPosition();
            this.groundLayer?.setPosition(layerXY.topLeft.x, layerXY.topLeft.y);
            this.player?.sprite?.setPosition(layerXY.topLeft.x + (currentPlayerX - currentX), layerXY.topLeft.y + (currentPlayerY - currentY));
        });
    }

    public create({ source, player, entranceDirection }: IRoomSceneConfig): void {
        this.player = player;
        this.setUpRoom(source, entranceDirection);
    }

    public update(): void {
        this.player?.update();
    }

    ////////////////////
    // Public Methods //
    ////////////////////


    /////////////////////
    // Private Methods //
    /////////////////////
    private setUpRoom(source: Room, entranceDirection?: Direction): void {
        const tileMap = this.make.tilemap({ tileWidth: tileSize, tileHeight: tileSize, width: roomTileWidth, height: roomTileHeight });
        const tileSet = tileMap.addTilesetImage('tiles', undefined, 48, 48, 1, 2);
        const roomPosition = this.getRoomPosition();
        this.groundLayer = tileMap.createBlankDynamicLayer(groundLayerName, tileSet, roomPosition.topLeft.x, roomPosition.topLeft.y);
        this.stuffLayer = tileMap.createBlankDynamicLayer(stuffLayerName, tileSet, roomPosition.topLeft.x, roomPosition.topLeft.y);

        if (Object.keys(source.layers).length > 0) {
            // if this room has already had layers generated for it, load them in instead of generating new ones
            for (const tile of source.layers[groundLayerName]) {
                this.groundLayer.putTileAt(tile.tileIndex, tile.x, tile.y);
            }

            for (const tile of source.layers[stuffLayerName]) {
                this.stuffLayer.putTileAt(tile.tileIndex, tile.x, tile.y);
            }
        } else {
            // fill in non-wall ground layer with floor pieces
            this.groundLayer.weightedRandomize(2, 2, tileMap.width - 4, tileMap.height - 4, [
                { index: Dungeon1TileSetIndex.NormalFloor, weight: 9.25 },
                { index: [Dungeon1TileSetIndex.TexturedFloor1], weight: 0.75 }
            ]);

            // add corner pieces
            this.groundLayer.putTileAt(Dungeon1TileSetIndex.TopLeftCorner, 1, 1);
            this.groundLayer.putTileAt(Dungeon1TileSetIndex.TopRightCorner, tileMap.width - 2, 1);
            this.groundLayer.putTileAt(Dungeon1TileSetIndex.BottomLeftCorner, 1, tileMap.height - 2);
            this.groundLayer.putTileAt(Dungeon1TileSetIndex.BottomRightCorner, tileMap.width - 2, tileMap.height - 2);

            // add randomized wall pieces and also doors if there's connected rooms
            // top
            this.groundLayer.weightedRandomize(2, 1, tileMap.width - 4, 1, Dungeon1TileSetIndexWallWeights.TopWall);
            if (source.connectedRooms.Above) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.TopGate, Math.floor(tileMap.width / 2), 1);
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.TopGateCap, Math.floor(tileMap.width / 2), 0);
            }
            // right
            this.groundLayer.weightedRandomize(tileMap.width - 2, 2, 1, tileMap.height - 4, Dungeon1TileSetIndexWallWeights.RightWall);
            if (source.connectedRooms.Right) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.RightGate, tileMap.width - 2, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.RightGateCap, tileMap.width - 1, Math.floor(tileMap.height / 2));
            }
            // bottom
            this.groundLayer.weightedRandomize(2, tileMap.height - 2, tileMap.width - 4, 1, Dungeon1TileSetIndexWallWeights.BottomWall);
            if (source.connectedRooms.Below) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.BottomGate, Math.floor(tileMap.width / 2), tileMap.height - 2);
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.BottomGateCap, Math.floor(tileMap.width / 2), tileMap.height - 1);
            }
            // left
            this.groundLayer.weightedRandomize(1, 2, 1, tileMap.height - 4, Dungeon1TileSetIndexWallWeights.LeftWall);
            if (source.connectedRooms.Left) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.LeftGate, 1, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.LeftGateCap, 0, Math.floor(tileMap.height / 2));
            }

            switch (source.roomType) {
                case RoomType.Normal:
                case RoomType.Pillar:
                case RoomType.Divided:
                case RoomType.Chest:
                case RoomType.Hole:
                    // hole corners
                    this.groundLayer.putTileAt(Dungeon1TileSetIndex.HoleTopLeftCorner, 4, 4);
                    this.groundLayer.putTileAt(Dungeon1TileSetIndex.HoleTopRightCorner, tileMap.width - 5, 4);
                    this.groundLayer.putTileAt(Dungeon1TileSetIndex.HoleBottomLeftCorner, 4, tileMap.height - 5);
                    this.groundLayer.putTileAt(Dungeon1TileSetIndex.HoleBottomRightCorner, tileMap.width - 5, tileMap.height - 5);

                    // top wall
                    this.groundLayer.weightedRandomize(5, 4, tileMap.width - 10, 1, Dungeon1TileSetIndexWallWeights.BottomWall);
                    // right wall
                    this.groundLayer.weightedRandomize(tileMap.width - 5, 5, 1, tileMap.height - 10, Dungeon1TileSetIndexWallWeights.LeftWall);
                    // bottom wall
                    this.groundLayer.weightedRandomize(5, tileMap.height - 5, tileMap.width - 10, 1, Dungeon1TileSetIndexWallWeights.TopWall);
                    // left wall
                    this.groundLayer.weightedRandomize(4, 5, 1, tileMap.height - 10, Dungeon1TileSetIndexWallWeights.RightWall);
                    // this.groundLayer.weightedRandomize
                    this.groundLayer.fill(Dungeon1TileSetIndex.Empty, 5, 5, tileMap.width - 10, tileMap.height - 10);
                    break;
            }

            // persist the layers we built to the room
            source.layers[groundLayerName] = [];
            this.groundLayer.forEachTile((tile) => {
                source.layers[groundLayerName].push({ tileIndex: tile.index, x: tile.x, y: tile.y });
            });

            source.layers[stuffLayerName] = [];
            this.stuffLayer.forEachTile((tile) => {
                source.layers[stuffLayerName].push({ tileIndex: tile.index, x: tile.x, y: tile.y });
            });
        }

        this.groundLayer.setTileIndexCallback(Dungeon1TileSetIndex.TopGate, () => {
            this.player?.freeze();

            const camera = this.cameras.main;
            camera.fade(250, 0, 0, 0);

            camera.once('camerafadeoutcomplete', () => {
                this.player?.destroy();
                this.scene.restart({ source: source.connectedRooms.Above, player: this.player, entranceDirection: Direction.Below })
            });
        }, this);

        this.groundLayer.setTileIndexCallback(Dungeon1TileSetIndex.RightGate, () => {
            this.player?.freeze();

            const camera = this.cameras.main;
            camera.fade(250, 0, 0, 0);

            camera.once('camerafadeoutcomplete', () => {
                this.player?.destroy();
                this.scene.restart({ source: source.connectedRooms.Right, player: this.player, entranceDirection: Direction.Left })
            });
        }, this);

        this.groundLayer.setTileIndexCallback(Dungeon1TileSetIndex.BottomGate, () => {
            this.player?.freeze();

            const camera = this.cameras.main;
            camera.fade(250, 0, 0, 0);

            camera.once('camerafadeoutcomplete', () => {
                this.player?.destroy();
                this.scene.restart({ source: source.connectedRooms.Below, player: this.player, entranceDirection: Direction.Above })
            });
        }, this);

        this.groundLayer.setTileIndexCallback(Dungeon1TileSetIndex.LeftGate, () => {
            this.player?.freeze();

            const camera = this.cameras.main;
            camera.fade(250, 0, 0, 0);

            camera.once('camerafadeoutcomplete', () => {
                this.player?.destroy();
                this.scene.restart({ source: source.connectedRooms.Left, player: this.player, entranceDirection: Direction.Right })
            });
        }, this);

        let playerStartingX = roomPosition.center.x
        let playerStartingY = roomPosition.center.y;
        if (entranceDirection != null) {
            switch (entranceDirection) {
                case Direction.Left:
                    playerStartingX = roomPosition.topLeft.x + 120;
                    break;
                case Direction.Right:
                    playerStartingX = roomPosition.topRight.x - 120;
                    break;
                case Direction.Above:
                    playerStartingY = roomPosition.topLeft.y + 120;
                    break;
                case Direction.Below:
                    playerStartingY = roomPosition.bottomLeft.y - 120;
                    break;
            }
        }
        this.player?.registerNewScene(this, playerStartingX, playerStartingY);

        // must wait for this until after registerNewScene, because a new sprite is spun up for each scene
        this.groundLayer.setCollisionByExclusion([
            -1,
            Dungeon1TileSetIndex.NormalFloor,
            Dungeon1TileSetIndex.TexturedFloor1
        ]);
        this.physics.add.collider(this.player?.sprite as Phaser.GameObjects.GameObject, this.groundLayer);
    }

    private getRoomPosition(): {
        center: { x: number, y: number },
        topLeft: { x: number, y: number  },
        topRight: { x: number, y: number  },
        topCenter: { x: number, y: number },
        rightCenter: { x: number, y: number },
        bottomLeft: { x: number, y: number  },
        bottomRight: { x: number, y: number  },
        bottomCenter: { x: number, y: number },
        leftCenter: { x: number, y: number }
    } {
        const roomWidth = roomTileWidth * tileSize;
        const halfRoomWidth = roomWidth * 0.5;
        const roomHeight = roomTileHeight * tileSize;
        const halfRoomHeight = roomHeight * 0.5;

        const gameHeight = getGameHeight(this);
        const halfGameHeight = gameHeight * 0.5;
        const gameWidth = getGameWidth(this);
        const halfGameWidth = gameWidth * 0.5;

        const topY = Math.max(0, halfGameHeight - halfRoomHeight);
        const bottomY = halfGameHeight + halfRoomHeight;
        const leftX = Math.max(0, halfGameWidth - halfRoomWidth);
        const rightX = halfGameWidth + halfRoomWidth;
        const centerX = halfGameWidth;
        const centerY = halfGameHeight;

        return {
            center: { x: centerX, y: centerY },
            topLeft: { x: leftX, y: topY },
            topCenter: { x: centerX, y: topY },
            topRight: { x: rightX, y: topY },
            rightCenter: { x: rightX, y: centerY },
            bottomRight: { x: rightX, y: bottomY },
            bottomCenter: { x: centerX, y: bottomY },
            bottomLeft: { x: leftX, y: bottomY },
            leftCenter: { x: leftX, y: centerY }
        };
    }
}
