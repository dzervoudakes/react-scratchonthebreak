const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../dist');
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = merge(common, {
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: ROOT_DIR
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: module => {
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, '../node_modules')
					) === 0
				);
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new CopyWebpackPlugin([
			{ from: `${ROOT_DIR}/index.js`, to: `${BUILD_DIR}/index.js` },
			{ from: `${PUBLIC_DIR}/404.html`, to: `${BUILD_DIR}/public/404.html` },
			{ from: `${PUBLIC_DIR}/css/`, to: `${BUILD_DIR}/public/css/` }
		]),
		new HtmlWebpackPlugin({
			favicon: `${PUBLIC_DIR}/favicon.ico`,
			filename: 'index.html',
			template: `${ROOT_DIR}/conf/templates/template.html`,
			title: 'Scratch On The Break'
		})
	],
	output: {
		path: `${BUILD_DIR}/public`,
		filename: 'js/[name].[hash:8].min.js',
		sourceMapFilename: 'js/[name].[hash:8].min.map',
		chunkFilename: 'js/[id].[hash:8].min.js'
	}
});