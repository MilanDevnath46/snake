import files from "../script/assetsLoader.js"

export default class Preloader extends Phaser.Scene {
    constructor() {
        super({key: "Preloader", pack:{files}})
    }

    preload() {
        
    };

    create() {
        this.add.image(320, 280, "startButton").setDepth(2)
            .setInteractive({ useHandCursor: true })
            .on("pointerdown",() =>  this.scene.start("Start"));
        this.add.image(320, 240, "start").setDepth(1);
        this.add.image(320, 240, "bg");
       
      //  this.scene.start("Start");
        
    }

    
    
}