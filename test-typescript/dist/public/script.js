const socketClient = io();

socketClient.emit('chat message', 'New User Connected');

socketClient.on('chat message', (msg) => {
    let messages = document.getElementById('messages');
    let item = document.createElement('li');
    item.innerText = msg;   
    messages.appendChild(item);  
});
