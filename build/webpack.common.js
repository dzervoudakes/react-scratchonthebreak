const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

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
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
		alias: { '@': APP_DIR }
	}
};
