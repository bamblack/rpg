import * as Phaser from 'phaser';
import {
    BootScene,
    MainMenuScene,
    DungeonScene,
    RoomScene
} from './scenes';

export class Game {
    public game: Phaser.Game;

    constructor() {
        const gameConfig: Phaser.Types.Core.GameConfig = {
            title: 'Test',
            type: Phaser.WEBGL,
            scale: {
                mode: Phaser.Scale.ScaleModes.RESIZE,
                width: window.innerWidth,
                height: window.innerHeight
            },
            scene: [
                BootScene,  // this needs to be first so it gets loaded first, the order of the rest doesn't matter
                MainMenuScene,
                DungeonScene,
                RoomScene
            ],
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: true
                }
            },
            parent: 'game',
            backgroundColor: 0x0d0711
        };

        this.game = new Phaser.Game(gameConfig);
    }
};
