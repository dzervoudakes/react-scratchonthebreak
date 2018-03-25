const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src/app');

module.exports = {
	entry: `${APP_DIR}/index.jsx`,
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel-loader'
			}
		]
	}
};