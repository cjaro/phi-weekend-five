var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var emp = require('./routes/routes');
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // this creates req.body

app.use('/emp', emp);

app.listen(port, function() {
  console.log('listening', port);
});
