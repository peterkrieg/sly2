const express = require('express');
const compression = require('compression');
require('dotenv').config();


const app = express();

// port for slys.  is defined on port 3010 in .env file on server
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening to port: ${port}.`);
});

// use gzip for compression, faster page loading
app.use(compression());

// Provide path where to serve index.html file
app.use(express.static(`${__dirname}`));

