const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('../config');

const { BUILD_DIR, PUBLIC_DIR, ROOT_DIR } = config.directories;

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	performance: {
		hints: false
	},
	module: {
		rules: [{
			test: /\.css$/,
			include: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: {
					loader: 'style-loader',
					options: {
						hmr: false
					}
				},
				use: [{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: false,
						localIdentName: '[name].[local].[hash:base64:5]',
						minimize: true
					}
				}]
			})
		}]
	},
	plugins: [
		new webpack.EnvironmentPlugin(
			config.env.production
		),
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
