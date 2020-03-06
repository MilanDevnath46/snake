import { cellLength } from "../script/gride.js";

export default class ScoreFont extends Phaser.GameObjects.BitmapText {
    constructor(scene, x, y, font) {
        super(scene, x * cellLength, y * cellLength, font).setOrigin(0).setDepth(3);
    }
}

}