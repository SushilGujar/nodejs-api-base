const app = require('app');

// routes
app.get('/', (req, res) => {
	res.send('Welcome to simple NodeJS API. You just sent a GET request.');
});

