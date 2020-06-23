import { RoomScene } from '../scenes';

const baseSpeed = 300;

export class Player {
    public sprite?: Phaser.GameObjects.Sprite;

    private keys?: Phaser.Types.Input.Keyboard.CursorKeys;
    private scene?: Phaser.Scene;

    constructor() {
        // TODO
    }

    public destroy(): void {
        this.sprite?.destroy();
    }

    public freeze(): void {
        (this.sprite?.body as Phaser.Physics.Arcade.Body).moves = false;
    }

    public registerNewScene(scene: RoomScene, startingX: number, startingY: number) {
        this.scene = scene;

        const anims = this.scene.anims;

        anims.create({
            key: 'player-walk',
            frames: anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 8,
            repeat: -1
        });

        anims.create({
            key: 'player-walk-back',
            frames: anims.generateFrameNumbers('player', { start: 8, end: 10 }),
            frameRate: 8,
            repeat: -1
        });

        this.sprite = scene.physics.add
            .sprite(startingX, startingY, 'player', 0)
            .setSize(5, 5)
            .setOffset(15);

        this.keys = scene.input.keyboard.createCursorKeys();
    }

    public update(): void {
        const body = this.sprite?.body as Phaser.Physics.Arcade.Body;
        if (body != null) {
            body.setVelocity(0);
            if (this.keys?.left?.isDown) {
                body.setVelocityX(-baseSpeed);
                this.sprite?.setFlipX(true);
            } else if (this.keys?.right?.isDown) {
                body.setVelocityX(baseSpeed);
                this.sprite?.setFlipX(false);
            }

            if (this.keys?.up?.isDown) {
                body.setVelocityY(-baseSpeed);
            } else if (this.keys?.down?.isDown) {
                body.setVelocityY(baseSpeed);
            }

            // normalize and scale the velocity so that sprite can't move faster along a diagonal
            body.velocity.normalize().scale(baseSpeed);

            if (this.keys?.left?.isDown || this.keys?.right?.isDown || this.keys?.down?.isDown) {
                this.sprite?.anims.play('player-walk', true);
            } else if (this.keys?.up?.isDown) {
                this.sprite?.anims.play('player-walk-back', true);
            } else {
                this.sprite?.anims.stop();
            }
        }
    }
}
