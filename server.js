const ws = require('ws'); //websockets
const express = require('express'); //webserver
const { HWUser, Lobby } = require('./HW_class.js'); 
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));

let lobbies = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

app.get('/', (req, res) => {
    res.render('main.ejs');
});

app.listen(1770);


const wss = new ws.WebSocketServer({
    port:1771
});
wss.on('connection', function connection(ws) {
    let user;
    ws.on('message', function message(data) {
        console.log(JSON.parse(data));
        let dat = JSON.parse(data);
        if (dat.mt == "hello") {
            user = new HWUser(dat.id);
            ws.send(user.ackHello());
        }
        if (dat.mt == "jl") {
            user = new HWUser(dat.id);
            if (!lobbies[dat.lid]) {
                ws.send(JSON.stringify({result:"fail",reason:"Lobby does not exist."}));
                return;
            } else {
                
            }
        }
    });
  
    ws.send(JSON.stringify({"mt":"r"}));
});