module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always",
        ],
        "no-console": ["error", {
            allow: ["warn", "error", "log"]
        }],
    }
};