import express from 'express';
import { Server } from 'socket.io';
import  config  from './config';

const app = express();

app.use('', express.static(config.publicDir));

/* app.get('/', (req, res) => {
  res.send('Hello World!');
});
 */
const webserver = app.listen(config.port, () => {
  console.log(config.serverRunning);
});

const io = new Server(webserver);

io.on(config.socketEvents.connection, (socket) => {
  console.log(config.userConnected);
  socket.on(config.socketEvents.chatMessage, (msg:any) => {
    console.log('message: ' + msg);
    socket.broadcast.emit(config.socketEvents.chatMessage, msg);
  }
  );
  socket.on(config.socketEvents.disconnect, () => {
    console.log(config.userDisconnected);
  });
});
