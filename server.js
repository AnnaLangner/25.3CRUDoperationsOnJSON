var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log('I received a GET request to the home page');
    res.send('Hello GET!');
});

var server = app.listen(3000, function () {
    console.log('The sample app listens on http://localhost: 3000');
});