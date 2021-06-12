const express = require('express');
const app = express();
const router = require('./router');
require('dotenv/config');

// routes
app.use('/', router);

app.listen(process.env.PORT, () => console.log(`running on port ${process.env.PORT}`));

