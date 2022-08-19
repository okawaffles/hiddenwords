let luid = 0;
let uname = "username";
let userwstoken = getRndInteger(0,999999);

const WS_CONNECT_URL = "ws://localhost:1771";
const WS = new WebSocket(WS_CONNECT_URL);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const setLobbyUID = function(id) {
    luid = id;
}


WS.addEventListener('open', (event) => {
    WS.send({'mt':'hello','id':userwstoken});
});
WS.addEventListener('message', (event) => {
    alert(event.data);
})