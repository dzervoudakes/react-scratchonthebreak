const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '../public');
const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = merge(common, {
	plugins: [
		new HtmlWebpackPlugin({
			favicon: `${BUILD_DIR}/favicon.ico`,
			filename: 'index.html',
			template: `${ROOT_DIR}/build/templates/template.html`,
			title: 'Scratch On The Break'
		}),
		new ExtractTextPlugin('css/styles.css', {
			allChunks: true
		})
	],
	watchOptions: {
		ignored: [BUILD_DIR]
	},
	output: {
		path: BUILD_DIR,
		filename: 'js/app.js'
	}
});