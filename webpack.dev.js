const config = require("./webpack.base");
const merge = require("webpack-merge");

module.exports = merge.smart(config, {
    mode: process.env.NODE_ENV,
    devtool: "cheap-module-eval-source-map",
    devServer: {
        noInfo: false,
        proxy: {
            "/intelligence": {
                target: "http://10.4.5.134",
                changeOrigin: true,
                secure: false
            }
        },
        open: true,
    }
});