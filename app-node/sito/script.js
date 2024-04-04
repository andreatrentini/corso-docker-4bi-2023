var nickname;
var nicknames;

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
    visualizzaMessaggi(messaggio);
    // 2. visualizzo l'elemento html per la registrazione
    // Per evidenziare che l'elemento viene visualizzato solo dopo la connessione al server
    // aggiungo un timeout di 3 secondi
    visualizzaRegistrazione();
});

socketClient.on(messages.esitoRegistrazione, (risposta) => {
    if(risposta.esito) {
        nickname = risposta.nickname;
        // Visualizzo un messaggio nel di messaggi
        visualizzaMessaggi('Registrazione avvenuta con successo. Benvenuto ' + nickname);
        // Nascondo il form di registrazione
        let registrazione = document.getElementById('registration');
        registrazione.style.visibility = 'hidden';
    }
    else {
        alert('Il nickname è già stato utilizzato. Scegline un altro.');    
    }
});

function visualizzaMessaggi(messaggio) {
    // 1. creo l'elemento html da aggiungere al dom
    let benvenuto = document.createElement('h3');
    benvenuto.innerText = messaggio;
    // 2. aggiungo l'elemento al dom
    let messaggi = document.getElementById('messaggi');
    messaggi.innerHTML = '';
    messaggi.appendChild(benvenuto);
}

function visualizzaRegistrazione() {
    setTimeout(() => {
        let registrazione = document.getElementById('registration');
        registrazione.style.visibility = 'visible';
    }, 500);
}

function registrazione() {
    // 1. prendere il nome dal campo di input
    let nickname = document.getElementById('nickname').value;
    // 2. Controllo che il nome sia stato inserito e non sia vuoto
    
    if (nickname === '') {
        alert('Devi inserire un nome.');
        return;
    }
    else {
        console.log('Registrazione');
        // 3. inviare il nome al server
        socketClient.emit(messages.registrazione, nickname);
    }
}