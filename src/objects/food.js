import { noOfCellsOnX, noOfCellsOnY, cellLength } from "../script/gride.js";

export default class Food extends Phaser.GameObjects.Image {
    constructor(scene, x, y) {
        super(scene, x * cellLength, y * cellLength, "food").setOrigin(0).setDepth(2);
        scene.children.add(this);
    }

    reposition(snake) {
        const testGrid = Array.from({ length: noOfCellsOnY },
            () => Array.from({ length: noOfCellsOnX }, () => true)
        );

        snake.updateGrid(testGrid);

        const validLocations = [];

        for (let y = 0; y < noOfCellsOnY; y++) {
            for (let x = 0; x < noOfCellsOnX; x++) {
                if (testGrid[y][x] === true) {

                    //  Is this position valid for food? If so, add it here...
                    validLocations.push({ x, y });
                }
            }
        }

        if (validLocations.length > 0) {
            let point = Phaser.Math.RND.pick(validLocations);

            this.setPosition(point.x * cellLength, point.y * cellLength);
            console.log(point.x * cellLength, point.y * cellLength)
            return true;
        }
        return false;
    }

}