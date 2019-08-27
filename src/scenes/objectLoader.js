import Snake from "../objects/snake.js";
import Food from "../objects/food.js"

export default class ObjectLoader extends Phaser.Scene {
    constructor() {
        super({key:"ObjectLoader"})
    };

    addFood(x = 0, y = x) {
        return new Food(this, x, y)
    }

    addSnake(x = 0, y = x) {
        return new Snake(this, x, y);
    };

    addBg() {
        return this.add.image(320, 240, "bg").setDepth(0);
    }

}