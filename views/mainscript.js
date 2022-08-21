let luid = 0;
let uname = "username";
let userwstoken = getRndInteger(0,999999);
let sendHello = true;

const WS_CONNECT_URL = "ws://localhost:1771";
const WS = new WebSocket(WS_CONNECT_URL);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const setLobbyUID = function(id) {
    luid = id;
}


WS.addEventListener('open', (event) => {
    console.log('ws opened.');
});
WS.addEventListener('message', (event) => {
    console.log(event.data);
    let dat = JSON.parse(event.data);

    if (dat.mt == "r") {
        WS.send(JSON.stringify({'mt':'hello','id':userwstoken}));
    }
    if (dat.mt == "ack" && dat.id == userwstoken) {
        sendHello == false;
        console.log('ready to join lobbies.');
    }
})