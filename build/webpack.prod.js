const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
	mode: 'production',
	devtool: 'source-map',
	performance: {
		hints: false
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				include: path.resolve(__dirname, '../src'),
				loader: 'babel-loader',
				query: {
					plugins: ['transform-react-remove-prop-types']
				}
			}
		]
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'production'
		}),
		new CleanWebpackPlugin(['dist'], {
			root: ROOT_DIR
		}),
		new ExtractTextPlugin('css/[name].[chunkhash].min.css', {
			allChunks: true
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.min\.css$/,
			cssProcessorOptions: {
				discardComments: {
					removeAll: true
				}
			}
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
		new webpack.optimize.AggressiveMergingPlugin(),
		new CopyWebpackPlugin([{
			from: `${ROOT_DIR}/index.js`,
			to: `${BUILD_DIR}/index.js`
		}]),
		new HtmlWebpackPlugin({
			favicon: `${PUBLIC_DIR}/favicon.ico`,
			filename: 'index.html',
			template: `${PUBLIC_DIR}/index.html`,
			title: 'Scratch On The Break',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /node_modules/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		},
		runtimeChunk: {
			name: 'manifest'
		}
	},
	output: {
		path: `${BUILD_DIR}/public`,
		filename: 'js/[name].[chunkhash].min.js',
		sourceMapFilename: 'js/[name].[chunkhash].min.map',
		chunkFilename: 'js/[name].[chunkhash].min.js'
	}
});
