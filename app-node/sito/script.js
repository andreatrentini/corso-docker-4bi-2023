// La creazione di una istanza dell'oggetto io, crea il socket lato client ed attiva la connessione con il real time server
const socketClient = io();

socketClient.on(messages.welcome, (messaggio) => {
    let main = document.getElementById('main');
    let msgTag = document.createElement('h1');
    msgTag.id = 'benvenuto';
    msgTag.innerText = messaggio;
    main.appendChild(msgTag);
    setTimeout(() => {
        let registration = document.getElementById('registration');
        let benvenuto = document.getElementById('benvenuto');
        registration.style.visibility = 'visible';
        benvenuto.style.visibility = 'hidden';
    }, 3000);
    console.log(messaggio);
})

socketClient.on(messages.nuovoAmico, (messaggio) => {
    console.log(messaggio);
})

function registrazione() {
    //1. recupero il nickname
    let nickname = document.getElementById('nick-name').value;
    if (nickname) {
        socketClient.emit(messages.registration, nickname);
    }
}