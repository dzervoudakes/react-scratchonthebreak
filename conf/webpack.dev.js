const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '../public/js');

module.exports = merge(common, {
	output: {
		path: BUILD_DIR,
		filename: 'app.js'
	}
});