import { noOfCellsOnX, noOfCellsOnY, cellLength } from "../script/gride.js";

export default class Snake {
    constructor(scene, x, y) {
        this.body = scene.add.group({
            defaultKey: "body",
            createCallback: o => { o.setOrigin(0), o.setDepth(1) }
        });

        this.head = this.body.create(x * cellLength, y * cellLength);

        this.direction = new Phaser.Geom.Point(cellLength, 0);
        this.headPosition = new Phaser.Geom.Point(0, 0);
        this.tailPosition = new Phaser.Geom.Point(0, 0);
        this.alive = true;
        this.updater = true;
        this.moveTime = 0;
        this.speed = 150;
    };

    update(time) {
        if (time >= this.moveTime) {
            this.updater = true;
            return this.move(time);
        };
        return true;
    }


    turnRight() {
        if (this.updater) {

            if (this.direction.y > 0) {
                //counter clockwiae
                this.direction.setTo(this.direction.y, -this.direction.x);

            } else if (this.direction.y < 0) {
                //clockwise
                this.direction.setTo(-this.direction.y, this.direction.x);
            }
            this.updater = false;
        }
    };

    turnLeft() {
        if (this.updater) {
            if (this.direction.y > 0) {
                //clockwise
                this.direction.setTo(-this.direction.y, this.direction.x);

            } else if (this.direction.y < 0) {
                //counter clockwiae
                this.direction.setTo(this.direction.y, -this.direction.x);
            }

            this.updater = false;
        }
    };

    turnUp() {
        if (this.updater) {
            if (this.direction.x > 0) {
                //counter clockwiae
                this.direction.setTo(this.direction.y, -this.direction.x);

            } else if (this.direction.x < 0) {
                //clockwise
                this.direction.setTo(-this.direction.y, this.direction.x);
            }
            this.updater = false;
        }

    };

    turnDown() {
        if (this.updater) {
            if (this.direction.x > 0) {
                //clockwise
                this.direction.setTo(-this.direction.y, this.direction.x);
            } else if (this.direction.x < 0) {
                //counter clockwiae
                this.direction.setTo(this.direction.y, -this.direction.x);
            }

            this.updater = false;
        }

    };

    selfColid() {
        return Phaser.Actions.GetFirst(
            this.body.children.entries, { x: this.head.x, y: this.head.y },
            1
        );
    };


    move(time) {
        console.log("move");
        this.headPosition.setTo(
            Phaser.Math.Wrap(this.head.x + this.direction.x, 0, noOfCellsOnX * cellLength),
            Phaser.Math.Wrap(this.head.y + this.direction.y, 0, noOfCellsOnY * cellLength)
        );

        Phaser.Actions.ShiftPosition(
            this.body.getChildren(),
            this.headPosition.x,
            this.headPosition.y,
            1,
            this.tailPosition
        );

        if (this.selfColid()) {
            this.alive = false;
            return false
        };

        this.moveTime = time + this.speed;
        return true
    };

    grow() {
        this.body.create(this.tailPosition.x, this.tailPosition.y).setOrigin(0);
    };

    collideWithFood(food) {
        let foodEaten = 0;
        if (this.head.x === food.x && this.head.y === food.y) {
            this.grow();
            foodEaten++;
            if (foodEaten >= 1 && this.speed != 30) {
                this.speed -= 5;
                foodEaten == 0;
                console.log(this.speed);
            }

            // update speed of snake upon 5 food eaten
            return true
        }
        return false;
    };
    updateGrid(grid) {
        for (const segment of this.body.getChildren()) {
            const x = segment.x / cellLength;
            const y = segment.y / cellLength;

            grid[y][x] = false;
        }
        return grid;
    }


}