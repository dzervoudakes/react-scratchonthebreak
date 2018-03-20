const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
});