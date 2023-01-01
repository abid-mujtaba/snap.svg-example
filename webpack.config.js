const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        entry: __dirname + '/src/entry.js'
    },
    output: {
        filename: '[name].bundle.js'
    }
}
