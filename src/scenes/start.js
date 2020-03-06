export default class Start extends Phaser.Scene {
    constructor() {
        super({ key: "Start", })
    }

    create() {
        //console.log("hi from Start");


        const objectLoader = this.scene.get("ObjectLoader");

        this.scene.launch(objectLoader);

        this.food = objectLoader.addFood(3, 4)
        this.snake = objectLoader.addSnake(8, 8);
        this.bg = objectLoader.addBg();

        this.cursors = this.input.keyboard.addKeys({
            leftKey: Phaser.Input.Keyboard.KeyCodes.LEFT,
            rightKey: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            upKey: Phaser.Input.Keyboard.KeyCodes.UP,
            downKey: Phaser.Input.Keyboard.KeyCodes.DOWN

        });


    };

    update(time) {
        if (this.snake.alive) {
            this.updateINPUT();
            this.updateGAME(time);

        }
    }

    updateINPUT() {
        const { leftKey, rightKey, upKey, downKey } = this.cursors;
        if (Phaser.Input.Keyboard.JustDown(leftKey)) {
            this.snake.turnLeft();
            console.log('left');
        } else if (Phaser.Input.Keyboard.JustDown(rightKey)) {
            this.snake.turnRight();
            console.log('right');
        } else if (Phaser.Input.Keyboard.JustDown(upKey)) {
            this.snake.turnUp();
            console.log('up');
        } else if (Phaser.Input.Keyboard.JustDown(downKey)) {
            this.snake.turnDown();
            console.log('down');
        }
    };

    updateGAME(time) {
        const { snake, food } = this;

        if (snake.update(time)) {
            if (snake.collideWithFood(food)) {
                food.reposition(snake);
            }
        }

        if (snake.alive === false) {
            this.gameOver();
        }
    }

    gameOver() {
        this.time.delayedCall(1000, () => {
            this.scene
                .stop("Start")
                .stop("ObjectLoader")
                .start("GameOver");
            // console.log("hi from start");
        })
    }


}