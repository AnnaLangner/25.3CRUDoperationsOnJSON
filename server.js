var express = require('express');
var fs = require('fs');
var app = express();
var stringifyFile = '';

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    res.send(
        fs.readFile('./package.json', 'utf8', function (err, data) {
            if(err) throw err;
            stringifyFile = data
            res.send(data);
        })
    )
})
