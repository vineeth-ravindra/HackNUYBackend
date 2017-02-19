var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var port      = 3030;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./HackNYU/App.js")(app);

app.listen(port, function () {
    console.log('Example app listening on port '+port+ '!');
});