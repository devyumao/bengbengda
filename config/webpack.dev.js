var HtmlWebpackPlugin = require('html-webpack-plugin');

var helper = require('./helper');

module.exports = {
    debug: true,

    devtool: 'source-map',

    context: helper.SRC_PATH,

    entry: {
        game: 'main'
    },

    output: {
        path: helper.BIN_PATH,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        root: helper.SRC_PATH
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            chunks: ['game']
        })
    ],

    devServer: {
        port: 9001
        // host: 'localhost',
        // historyApiFallback: true,
        // watchOptions: {
        //     aggregateTimeout: 300
        // },
        // outputPath: helper.BIN_PATH
    }
};
