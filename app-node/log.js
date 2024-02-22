function log(request, response, next) {
    console.log('Richiesta in arrivo dal client con IP:', request.socket.remoteAddress);
    next();
}

module.exports = log;