const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Welcome to the simple nodejs ReST api world. You just sent a GET request');
});

module.exports = router;
