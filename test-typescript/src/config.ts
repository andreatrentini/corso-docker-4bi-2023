const config = {
    port: 3100,
    host: 'localhost',
    publicDir: __dirname + '/public',
    socketEvents: {
        connection: 'connection',
        chatMessage: 'chat message',
        disconnect: 'disconnect'
    },
    serverRunning: 'Server running at http://localhost:3100',
    userConnected: 'a user connected',
    userDisconnected: 'user disconnected',
    message: 'message: ',
    chatMessage: 'chat message',
    newUsers: 'new user connected',
};
export default config;