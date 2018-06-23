const express = require('express');
const path = require('path');
const fallback = require('connect-history-api-fallback');

const app = express();
const port = process.env.port || 8080;

if (process.env.NODE_ENV === 'development') {
	const webpack = require('webpack');
	const webpackConfig = require('./build/webpack.local');
	const webpackDev = require('webpack-dev-middleware');

	const compiler = webpack(webpackConfig);
	const devMiddleware = webpackDev(compiler, {
		publicPath: '/',
		quiet: true
	});

	app.use(devMiddleware);
}

if (process.env.NODE_ENV === 'production') {
	app.use((req, res) => {
		res.sendFile(path.join(__dirname, '/public/index.html'));
	});
}

app.use(fallback());
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
	// eslint-disable-next-line
	console.log(`react-scratchonthebreak booted up on port ${port}`);
});
