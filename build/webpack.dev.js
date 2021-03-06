const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('../config');

const { PUBLIC_DIR, ROOT_DIR } = config.paths;

module.exports = merge(common, {
	mode: 'development',
	plugins: [
		new webpack.EnvironmentPlugin(
			config.env.development
		),
		new HtmlWebpackPlugin({
			favicon: `${PUBLIC_DIR}/favicon.ico`,
			filename: 'index.html',
			template: `${PUBLIC_DIR}/index.html`,
			title: 'Scratch On The Break',
			inject: true
		}),
		new ExtractTextPlugin('css/[name].css', {
			allChunks: true
		})
	],
	optimization: {
		noEmitOnErrors: true,
		namedModules: true
	},
	output: {
		path: ROOT_DIR,
		filename: 'js/[name].js'
	}
});
