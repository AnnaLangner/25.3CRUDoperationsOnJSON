var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log('I received a GET request to the home page');
    res.send('Hello GET!');
});

app.get('/list_user', function (req, res) {
    console.log('I received a GET request to the /list_user page');
    res.send('Website with a list of users!');
});
app.get('/ab*cd', function(req, res) {
    console.log('I received a GET request to the /ab*cd page');
    res.send('The pattern fits');
});

app.post('/', function (req, res) {
    console.log('I received a POST request to the home page');
    res.send('Hello POST!');
});

app.delete('/del_user', function (req, res) {
    console.log('I received a DELETE request to the /del/user page');
    res.send('Hello DELETE!');
});

var server = app.listen(3000, function () {
    console.log('The sample app listens on http://localhost: 3000');
});