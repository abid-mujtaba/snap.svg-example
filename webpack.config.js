const webpack = require('webpack');

module.exports = {
    entry: {
        entry: __dirname + '/src/entry.ts'
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: require.resolve('snapsvg/dist/snap.svg.js'),
                use: [
                    {
                        loader: 'imports-loader',
                        options: {
                            wrapper: 'window',
                        }
                    },
                    {
                        loader: 'imports-loader',
                        options: {
                            additionalCode: 'var fix = module.exports = 0;'
                        }
                    }
                ]
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        alias: {
            snapsvg: 'snapsvg/dist/snap.svg.js',
        },
        extensions: ['.tsx', '.ts', '.js']
    },
}
