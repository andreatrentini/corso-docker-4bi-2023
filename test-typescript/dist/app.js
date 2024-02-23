"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.use('', express_1.default.static(config_1.default.publicDir));
/* app.get('/', (req, res) => {
  res.send('Hello World!');
});
 */
const webserver = app.listen(config_1.default.port, () => {
    console.log(config_1.default.serverRunning);
});
const io = new socket_io_1.Server(webserver);
io.on(config_1.default.socketEvents.connection, (socket) => {
    console.log(config_1.default.userConnected);
    socket.on(config_1.default.socketEvents.chatMessage, (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit(config_1.default.socketEvents.chatMessage, msg);
    });
    socket.on(config_1.default.socketEvents.disconnect, () => {
        console.log(config_1.default.userDisconnected);
    });
});
