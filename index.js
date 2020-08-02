const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Const log error
const { writeError } = require('./src/lib/writeLog');

// data page routes
const { getMoviePage, getMovieById } = require('./src/routes/movie.routes.js');

// routes for index page
const router = require('./src/routes/main');

// app port
let { port } = require('./config/port');

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/src/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'dist'))); // configure express to use public folder

// routes for the app
app.get('/', router);
app.get('/movie', getMoviePage);
app.get('/movie.info', getMovieById);

//set the app to listen on the port
port = process.env.PORT ? process.env.PORT : port;
app.listen(port);

// Log error write>
process.on('uncaughtException', err => {
    writeError(err);
});