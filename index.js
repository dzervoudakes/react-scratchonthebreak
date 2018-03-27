const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 8080;

app.get('*.min.js', (req, res, next) => {
	req.url = `${req.url}.gz`;
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/javascript');
	next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get(['/', '/eob', '/neob', '/nsob', '/sob'], (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use((req, res) => {
	res.status(404);
	res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(port, () => {
	console.log(`react-scratchonthebreak booted up on port ${port}`);
});