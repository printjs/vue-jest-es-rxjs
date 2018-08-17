const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = require("./webpack.base");
const merge = require("webpack-merge");

module.exports = merge.smart(config, {
    mode: process.env.NODE_ENV,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                // uglifyOptions: {

                // }
            })
        ],
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin([
            "dist",
        ], {
            root: __dirname,
            verbose: false,
            watch: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
});