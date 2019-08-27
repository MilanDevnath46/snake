export default class GameOver extends Phaser.Scene{
    constructor() {
        super({key:"GameOver"})
    };
    create() {
        this.add.image(320, 280, "startButton").setDepth(2)
            .setInteractive({ useHandCursor: true })
            .on("pointerdown", () => {
                this.scene
                    .start("Start")
            });
        this.add.image(320, 240, "game-over").setDepth(1);
        this.add.image(320, 240, "bg");
        console.log("hi from game over");
    }
}