import { Button } from '../ui';
import { DUNGEON_SCENE_KEY } from './dungeon.scene';

export const MAIN_MENU_SCENE_KEY = 'MAIN_MENU';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: MAIN_MENU_SCENE_KEY
};

export class MainMenuScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    public create() {
        const startGameButton = new Button({
            scene: this,
            x: 100,
            y: 150,
            text: 'Start Game',
            onClick: () => {
                this.scene.start(DUNGEON_SCENE_KEY);
            }
        });
    }
}
