import { noop } from '../utils';

export interface IButtonConfig {
    scene: Phaser.Scene
    x: number
    y: number,
    text: string,
    fontSize?: number,
    padding?: number,
    alignment?: 'left' | 'right' | 'center' | 'justify',
    onClick?: () => void
}

export class Button extends Phaser.GameObjects.Rectangle {
    private label: Phaser.GameObjects.Text;

    constructor({ scene, x, y, text, fontSize = 18, padding = 10, alignment = 'center', onClick = noop }: IButtonConfig) {
        super(scene, x, y);
        scene.add.existing(this);

        this.setOrigin(0, 0);

        this.label = scene.add.text(x + padding, y + padding, text).setFontSize(fontSize).setAlign(alignment);
        this.width = this.label.width + (padding * 2);
        this.height = this.label.height + (padding * 2);

        this.setInteractive({ useHandCursor: true })
            .on('pointerover', this.enterButtonHoverState)
            .on('pointerout', this.enterButtonRestState)
            .on('pointerdown', this.enterButtonActiveState)
            .on('pointerup', this.enterButtonHoverState)
            .on('pointerup', onClick)

        this.enterButtonRestState();
    }

    private enterButtonActiveState(): void {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    }

    private enterButtonHoverState(): void {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    }

    private enterButtonRestState(): void {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x888888);
    }
}
