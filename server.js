var express = require('express');
var fs = require('fs');
bodyParser = require('body-parser');
var app = express();
var stringifyFile = '';

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {

    fs.readFile('./package.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    })

});

app.post('/updateNote/:note', function (req, res) {
    req.params.note = stringifyFile;
    fs.writeFile('.package.json', stringifyFile, function (err) {
        if (err) throw err;
        console.log('file updated');
        res.send(stringifyFile);
    })
});

app.listen(3000);