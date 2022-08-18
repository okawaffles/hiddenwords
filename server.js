const ws = require('ws'); //websockets
const express = require('express'); //webserver
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main.ejs');
});

app.listen(1770);