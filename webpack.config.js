const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src/app');
const BUILD_DIR = path.resolve(__dirname, 'public');

const config = {
    entry: `${APP_DIR}/index.jsx`,
    output: {
        path: BUILD_DIR,
        filename: 'js/app.min.js'
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: 'js/app.min.js.gz',
            algorithm: 'gzip',
            test: /\.js$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
