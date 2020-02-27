const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Const log error
const {
    writeError
} = require('./src/lib/writeLog');


// routes
// routes for db render
// data page routes
const {
    getPlaceholderPage
} = require('./src/routes/data.js');
//db data info
const {
    getPlaceholderById
} = require('./src/routes/data_info.js');

// routes for index page
const indexRoutes = require('./src/routes/index');

// app port
let {
    port
} = require('./config/app');

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/src/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// routes for the app
app.get('/', indexRoutes);
app.get('/data', getPlaceholderPage);
app.get('/data_card', getPlaceholderById);

//set the app to listen on the port
port = process.env.PORT ? process.env.PORT : port;
app.listen(port);

// Log error write>
process.on('uncaughtException', err => {
    writeError(err);
});