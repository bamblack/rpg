import { Dungeon } from '../models/Dungeon';
import { chain } from 'lodash';
import { Player, Room } from '../models';
import { RoomScene } from './room.scene';

export const DUNGEON_SCENE_KEY = 'DUNGEON';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: DUNGEON_SCENE_KEY,
};

export class DungeonScene extends Phaser.Scene {
    private dungeon: Dungeon;
    private player: Player;
    private scenes: RoomScene[] = [];

    constructor() {
        super(sceneConfig);

        this.dungeon = new Dungeon();
        this.player = new Player();
    }

    ////////////////////////////
    // Built-in Scene Methods //
    ////////////////////////////
    public preload(): void {
        // TODO
    }

    public create(): void {
        this.reset();
    }



    ////////////////////
    // Public Methods //
    ////////////////////
    public stuff(): void { }



    /////////////////////
    // Private Methods //
    /////////////////////
    private reset(): void {
        const spawnRoom = chain(this.dungeon.rooms)
            .flatMap()
            .find(room => room != null && room.isSpawn)
            .valueOf();

        this.scene.launch('ROOM', { source: spawnRoom, player: this.player, active: false, visible: false });
    }
}
