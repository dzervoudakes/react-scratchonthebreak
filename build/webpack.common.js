const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');

const { APP_DIR, PUBLIC_DIR } = config.directories;

module.exports = {
	entry: {
		app: `${APP_DIR}/index.jsx`
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: {
						loader: 'style-loader',
						options: {
							hmr: false
						}
					},
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1
							}
						},
						'postcss-loader'
					]
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name].[hash:7].[ext]'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
		alias: {
			'@': APP_DIR,
			'@public': PUBLIC_DIR
		}
	}
};
