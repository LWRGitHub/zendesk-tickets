const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./routes/index.js');

var port = process.env.PORT || 3000;
var server=app.listen(port,function(){})

module.exports = app;