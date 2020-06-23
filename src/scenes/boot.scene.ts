import { MAIN_MENU_SCENE_KEY } from './main-menu.scene';
import { getGameWidth, getGameHeight } from '../utils';

export const BOOT_SCENE_KEY = 'BOOT';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: BOOT_SCENE_KEY
};

export class BootScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }


    ////////////////////
    // Public Methods //
    ////////////////////
    public preload(): void {
        const halfWidth = getGameWidth(this) * 0.5;
        const halfHeight = getGameHeight(this) * 0.5;

        const progressBarContainer = this.add.rectangle(halfWidth, halfHeight, 400, 100, 0xffffff);
        const progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, 100 - 20, 0xc1c1c1);
        const loadingText = this.add.text(halfWidth, halfHeight - 85, 'Loading...').setFontSize(24);
        loadingText.setX(halfWidth - (loadingText.width / 2));
        const percentText = this.add.text(halfWidth, halfHeight + 60, '').setFontSize(24);

        this.load.on('progress', (progressValue: number) => {
            progressBar.width = (400 - 30) * progressValue;
            percentText.setText(`${progressValue * 100}%`);
            percentText.setX((getGameWidth(this) * 0.5) - (percentText.width / 2));
        });

        this.load.once('complete', () => {
            this.load.off('progress');

            loadingText.destroy();
            percentText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            this.scene.start(MAIN_MENU_SCENE_KEY);
        });

        this.loadAssets();
    }

    /////////////////////
    // Private Methods //
    /////////////////////
    private loadAssets() {
        this.load.json('assets', 'assets/json/assets.json');
        const assets = this.cache.json.get('assets');

        // for (const assetType of Object.keys(assets)) {
        //     for (const assetKey of Object.keys(assets[assetType])) {
        //         const asset = assets[assetType][assetKey];

        //         switch(assetType) {
        //             case 'atlas':
        //             case 'unityAtlas':
        //             case 'bitmapFont':
        //             case 'spritesheet':
        //             case 'multiatlas':
        //                 // TODO
        //                 break;
        //             case 'audio':
        //                 // TODO
        //                 break;
        //             case 'html':
        //                 // TODO
        //                 break;
        //             default:
        //                 // TODO
        //                 break;
        //         }
        //     }
        // }
    }

}
