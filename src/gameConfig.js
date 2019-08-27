import * as scenes from "../src/scenes/loader.js";

export const width = 640;
export const height = 480;
export const type = Phaser.WEBGL ;
export const resolution = 1;
export const render = {
    pixelArt: false,
    antialias: false
}
export const parent = "game";
export const canvasStyle= ` background-color: #00000; 
                            display:block; 
                            margin: 0; position: absolute; top:40%; left: 50%; 
                            transform: translate(-50%, -50%); 
                            flex-direction:column; 
                            -webkit-box-shadow: 0px 0px 43px 30px rgba(219,237,192,1); 
                            -moz-box-shadow: 0px 0px 43px 30px rgba(219,237,192,1); 
                            box-shadow: 0px 0px 43px 30px rgba(219,237,192,1);
                            border-radius: 10px 10px 10px 10px;
                            -moz-border-radius: 10px 10px 10px 10px;
                            -webkit-border-radius: 10px 10px 10px 10px;
                            border: 1px solid #000000;
                            `;
export const backgroundColor = '#000000';

export const loader = {
    path:'assets/'
}
export const scene = Object.values(scenes);