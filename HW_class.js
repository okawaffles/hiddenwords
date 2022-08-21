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

module.exports = {HWUser};