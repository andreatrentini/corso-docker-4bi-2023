const messages = require("./messages");

// La creazione di una istanza dell'oggetto io, crea il socket lato client ed attiva la connessione con il real time server
const socketClient = io();

socketClient.on(messages.nuovoAmico, (messaggio) => {
    console.log(messaggio);
});

socketClient.on(messages.clientConnessi, (numero) => {
    console.log('Numero di client connessi:', numero);
});

socketClient.on(messages.welcome, (messaggio) => {
    // 1. visualizzare il messaggio di benvenuto
    creaMessaggioBenvenuto(messaggio);
    // 2. visualizzo l'elemento html per la registrazione
    // Per evidenziare che l'elemento viene visualizzato solo dopo la connessione al server
    // aggiungo un timeout di 3 secondi
    visualizzaRegistrazione();
});

function creaMessaggioBenvenuto(messaggio) {
    // 1. creo l'elemento html da aggiungere al dom
    let benvenuto = document.createElement('h3');
    benvenuto.innerText = messaggio;
    // 2. aggiungo l'elemento al dom
    let main = document.getElementById('main');
    main.appendChild(benvenuto);
}

function visualizzaRegistrazione() {
    setTimeout(() => {
        let registrazione = document.getElementById('registration');
        registrazione.style.visibility = 'visible';
    }, 3000);
}

function registrazione() {
    // 1. prendere il nome dal campo di input
    let nickname = document.getElementById('nickname').value;
    // 2. Controllo che il nome sia stato inserito e non sia vuoto

    if (nickname.trim() === '') {
        alert('Devi inserire un nome.');
        return;
    }
    else {
        // 3. inviare il nome al server
        socketClient.emit(messages.registrazione, nickname);
    }
}