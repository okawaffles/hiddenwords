class HWUser {
    constructor(uid) {
        this.uid = uid;
    }

    get ackHello() {
        return this.genAckHello
    }
    genAckHello() {
        return JSON.stringify({"mt":"ack","id":this.uid});
    }
}

let lobbyIdCounter = 0;

class Lobby {
    constructor(starterUserId, settings) {
        this.suid = starterUserId;
        this.settings_json = settings;
        this.name = settings.name;
        this.playerlimit = settings.pl;
        this.continual = settings.continual;

        this.players = [starterUserId];
    }

    get lobbyDetails() {
        return this.settings_json;
    }
    get playerList() {
        return this.players;
    }

    get joinPlayer(pid) {
        this.players.push(pid);
    }
    get removePlayer(pid) {
        let index = this.players.indexOf(pid);
        if (index > -1) this.players.splice(index, 1);
    }
}

module.exports = {HWUser, Lobby};