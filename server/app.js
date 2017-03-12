var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var employees = require('./routes/routes');
var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/employees', employees);

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./server/public/index.html'));
});

app.listen(port, function() {
  console.log('listening', port);
});
