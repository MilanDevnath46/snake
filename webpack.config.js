const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        vendor: ["phaser"],
        game: "./src/game.js"
    },
    
    mode: 'development',

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "build"),
        library: '[name]',
        libraryTarget: 'umd',
    },
    
    watch:true,

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            inject: "body",
            template: "src/index.html",
            chunks: ['vendor', 'game'],
            chunksSortMode: 'manual',
            hash: false
        }),

        new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': true,
            'typeof WEBGL_RENDERER': true
        }),
         
        new CopyPlugin([
            {from: "src/assets", to: "./assets"}
        ]),

        new BrowserSyncPlugin({
            host: process.env.IP || 'localhost',
            port: process.env.PORT || 3000,
            server: {
                baseDir: ['./', './build']
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [path.resolve(__dirname, 'node-modules')],
                loader:"babel-loader",
                options: {
                    presets:["@babel/preset-env"]
                }
            },

        ]
        
    },
    

};