const webpack = require('webpack');

module.exports = {
    entry: {
        entry: __dirname + '/src/entry.js'
    },
    output: {
        filename: 'dist/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: require.resolve('snapsvg/dist/snap.svg.js'),
                use: 'imports-loader?this=>window,fix=>module.exports=0',
            },
        ],
    },
    resolve: {
        alias: {
            snapsvg: 'snapsvg/dist/snap.svg.js',
        },
    },
}
