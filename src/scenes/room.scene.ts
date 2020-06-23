import { RoomConnection, Room, Dungeon1TileSetIndex, Player, Dungeon } from '../models';
import { getGameHeight, getGameWidth } from '../utils';
import { Physics } from 'phaser';

export const ROOM_SCENE_KEY = 'ROOM';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: ROOM_SCENE_KEY
};
const roomTileWidth = 29;
const roomTileHeight = 15;
const tileSize = 48;
const groundLayerName = 'groundLayer';
const stuffLayerName = 'stuffLayer';

export interface IRoomSceneConfig {
    source: Room,
    player: Player,
    entranceDirection?: RoomConnection
};

export class RoomScene extends Phaser.Scene {
    private entranceDirection?: RoomConnection;
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
        this.load.image('tiles', '/assets/img/tilesheets/dungeon-1.png');
        this.load.spritesheet('player', '/assets/img/spritesheets/rogue.png', { frameWidth: 30, frameHeight: 30 });

        this.scale.on('resize', (gameSize: { gameWidth: number, gameHeight: number }) => {
            const currentX = this.groundLayer?.x ?? 0;
            const currentY = this.groundLayer?.y ?? 0;
            const currentPlayerX = this.player?.sprite?.x ?? 0;
            const currentPlayerY = this.player?.sprite?.y ?? 0;

            const layerXY = this.getScenePosition();
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
    private setUpRoom(source: Room, entranceDirection?: RoomConnection): void {
        const tileMap = this.make.tilemap({ tileWidth: tileSize, tileHeight: tileSize, width: roomTileWidth, height: roomTileHeight });
        const tileSet = tileMap.addTilesetImage('tiles', undefined, 48, 48, 1, 2);
        const layerXY = this.getScenePosition();
        this.groundLayer = tileMap.createBlankDynamicLayer(groundLayerName, tileSet, layerXY.topLeft.x, layerXY.topLeft.y);
        this.stuffLayer = tileMap.createBlankDynamicLayer(stuffLayerName, tileSet, layerXY.topLeft.x, layerXY.topLeft.y);

        if (Object.keys(source.layers).length > 0) {
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
            this.groundLayer.weightedRandomize(2, 1, tileMap.width - 4, 1, [
                { index: Dungeon1TileSetIndex.TopNormalWall, weight: 4 },
                { index: [Dungeon1TileSetIndex.TopTexturedWall1, Dungeon1TileSetIndex.TopTexturedWall2, Dungeon1TileSetIndex.TopTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Above) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.TopGate, Math.floor(tileMap.width / 2), 1);
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.TopGateCap, Math.floor(tileMap.width / 2), 0);
            }
            // right
            this.groundLayer.weightedRandomize(tileMap.width - 2, 2, 1, tileMap.height - 4, [
                { index: Dungeon1TileSetIndex.RightNormalWall, weight: 4 },
                { index: [Dungeon1TileSetIndex.RightTexturedWall1, Dungeon1TileSetIndex.RightTexturedWall2, Dungeon1TileSetIndex.RightTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Right) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.RightGate, tileMap.width - 2, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.RightGateCap, tileMap.width - 1, Math.floor(tileMap.height / 2));
            }
            // bottom
            this.groundLayer.weightedRandomize(2, tileMap.height - 2, tileMap.width - 4, 1, [
                { index: Dungeon1TileSetIndex.BottomNormalWall, weight: 4 },
                { index: [Dungeon1TileSetIndex.BottomTexturedWall1, Dungeon1TileSetIndex.BottomTexturedWall2, Dungeon1TileSetIndex.BottomTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Below) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.BottomGate, Math.floor(tileMap.width / 2), tileMap.height - 2);
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.BottomGateCap, Math.floor(tileMap.width / 2), tileMap.height - 1);
            }
            // left
            this.groundLayer.weightedRandomize(1, 2, 1, tileMap.height - 4, [
                { index: Dungeon1TileSetIndex.LeftNormalWall, weight: 4 },
                { index: [Dungeon1TileSetIndex.LeftTexturedWall1, Dungeon1TileSetIndex.LeftTexturedWall2, Dungeon1TileSetIndex.LeftTexturedWall3], weight: 1 }
            ]);
            if (source.connectedRooms.Left) {
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.LeftGate, 1, Math.floor(tileMap.height / 2));
                this.groundLayer.putTileAt(Dungeon1TileSetIndex.LeftGateCap, 0, Math.floor(tileMap.height / 2));
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
                this.scene.restart({ source: source.connectedRooms.Above, player: this.player, entranceDirection: RoomConnection.BELOW })
            });
        }, this);

        this.groundLayer.setTileIndexCallback(Dungeon1TileSetIndex.RightGate, () => {
            this.player?.freeze();

            const camera = this.cameras.main;
            camera.fade(250, 0, 0, 0);

            camera.once('camerafadeoutcomplete', () => {
                this.player?.destroy();
                this.scene.restart({ source: source.connectedRooms.Right, player: this.player, entranceDirection: RoomConnection.LEFT })
            });
        }, this);

        this.groundLayer.setTileIndexCallback(Dungeon1TileSetIndex.BottomGate, () => {
            this.player?.freeze();

            const camera = this.cameras.main;
            camera.fade(250, 0, 0, 0);

            camera.once('camerafadeoutcomplete', () => {
                this.player?.destroy();
                this.scene.restart({ source: source.connectedRooms.Below, player: this.player, entranceDirection: RoomConnection.ABOVE })
            });
        }, this);

        this.groundLayer.setTileIndexCallback(Dungeon1TileSetIndex.LeftGate, () => {
            this.player?.freeze();

            const camera = this.cameras.main;
            camera.fade(250, 0, 0, 0);

            camera.once('camerafadeoutcomplete', () => {
                this.player?.destroy();
                this.scene.restart({ source: source.connectedRooms.Left, player: this.player, entranceDirection: RoomConnection.RIGHT })
            });
        }, this);

        // TODO: player stuff
        const sceneDetails = this.getScenePosition();
        let playerStartingX = sceneDetails.topLeft.x + ((sceneDetails.topRight.x - sceneDetails.topLeft.x) / 2);
        let playerStartingY = sceneDetails.topLeft.y + ((sceneDetails.bottomLeft.y - sceneDetails.topLeft.y) / 2);
        if (entranceDirection != null) {
            switch (entranceDirection) {
                case RoomConnection.LEFT:
                    playerStartingX = sceneDetails.topLeft.x + 120;
                    break;
                case RoomConnection.RIGHT:
                    playerStartingX = sceneDetails.topRight.x - 120;
                    break;
                case RoomConnection.ABOVE:
                    playerStartingY = sceneDetails.topLeft.y + 120;
                    break;
                case RoomConnection.BELOW:
                    playerStartingY = sceneDetails.bottomLeft.y - 120;
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

    private getScenePosition(): {
        topLeft: { x: number, y: number  },
        topRight: { x: number, y: number  },
        bottomLeft: { x: number, y: number  },
        bottomRight: { x: number, y: number  }
    } {
        const roomWidth = roomTileWidth * tileSize;
        const roomHeight = roomTileHeight * tileSize;
        const gameHeight = getGameHeight(this);
        const gameWidth = getGameWidth(this);
        const halfGameHeight = gameHeight * 0.5;
        const halfGameWidth = gameWidth * 0.5;
        const halfRoomWidth = roomWidth * 0.5;
        const halfRoomHeight = roomHeight * 0.5;
        const layerX = Math.max(0, halfGameWidth - halfRoomWidth);
        const layerY = Math.max(0, halfGameHeight - halfRoomHeight);

        return {
            topLeft: { x: layerX, y: layerY },
            topRight: { x: layerX + roomWidth, y: layerY },
            bottomLeft: { x: layerX, y: layerY + roomHeight },
            bottomRight: { x: layerX + roomWidth, y: layerY + roomHeight }
        };
    }
}
