// Requirements
const express = require('express');
const path = require('path');

// App
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// Starting page
require('./routes/index.js')(app);

// localhost & server
var port = process.env.PORT || 3000;
var server=app.listen(port,function(){})

module.exports = app;