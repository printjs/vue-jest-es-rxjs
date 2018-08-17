const htmlloader = require("html-loader");


// stylus.tranform.js
module.exports = {
    // , filename, config, options
    process(src) {
        return htmlloader(src);
    },
};
