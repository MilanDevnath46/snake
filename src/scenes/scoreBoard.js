export default class ScoreBoard extends Phaser.Scene {
    constructor() {
        super({ key: "ScoreBoard" })
    };
    preload() {
        this.load.bitmapFont("pixelFont", "assets/font.png", "assets/font.xml");
    }
}