//require('../src/index.html');
import * as config from "../src/gameConfig.js";

export function boot() {
    return new Phaser.Game(config)
}
boot()