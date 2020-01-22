const express = require('express');
const app = express();
const { config } = require('./config/index');

app.get('/', function (req, res) {
    res.send('Hello World! 123')
});

app.get('/json', function (req, res) {
    res.json({ hello: 'world' });
});

app.get('/year/:year?', function (req, res) {
    if (!req.params.year) {
        res.status(404).send("Sorry, send a year please <br/>eg: year/2020");
    }
    const year = req.params.year;
    const checkFebruary = new Date(year, 2, 0).getDate() > 28 ? 'It\'s a leap year' : 'It\'s not a leap year';
    res.send(checkFebruary);
});

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});