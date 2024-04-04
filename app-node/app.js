// Carico il modulo express e lo associo alla costante express
const express = require('express');
// Aggiungo la libreria socket.io alla mia applicazione
const socketio = require("socket.io");

const { config } = require('./config');
const messages = require('./sito/messages');
const log = require('./log');

// il mio service corrisponde ad una istanza di express
const service = express();

/*
// Il metodo che segue è utilizzato soprattutto per la realizzazione di web service, non per la pubblicazione di interi siti web,
// composta da più file e sottodirectory. Il pronlema è che questo sistema prevede ll'suo del metodo get per ognuno dei file del sito
// definisco gli entry-point della mia applicazione
// In una chiamata ad un server web ho sempre una richiesta e il server deve preparare ed inviare una risposta
// Il metodo get, si mette in ascolto sulla url specificata nel primo parametro, e assegna la richiesta del client
// al primo parametro della funzione di callback, il secondo patrametro sarà la risposta che inviamo al client.
// Occorre eseguire un metodo dell'oggetto risposta per inviarla.
service.get('/',(richiesta, risposta) => {
    // Scrivere il codice da eseguire quando al server arriva la richiesta
    // sendfile invia il file specificato fra parentesi al client.
    // __dirname rappresenta il nome della directory che contine tutta l'applicazione server
    risposta.sendFile(__dirname + '/index.html');
})

// Mettere in ascolto il nostro servizio sulla porta che abbiamo scelto.
// Di solito un servizio in ascolto rappresenta il vero e proprio server
*/

// Pubblicazione di un intero sito web

// Uso una funzionalità di express chiamata static
// 1. dichiaro qual è la directory che contiene il sito

const directorySito = __dirname + '/sito';

// 2. Ordino ad express di usare questa diretory in modo statico

// service.use(log);
service.use('/', express.static(directorySito));


const server = service.listen(config.port, () => {
    console.log('Server in ascolto sulla porta ' + config.port + '...');
})

// Creo il mio server real time utilizzando il server Express per gestire le chiamate socket
const rtServer = socketio(server);

// Metto in ascolto il mio real time server di nuove connessioni. La funzione di callback verrà
// eseguita ogni volta che un client si connette al server. socket è un oggetto che consente la comunicazione
// fra server e client. Ogni client dispone di un suo oggetto socket.
rtServer.on(messages.connection, (socket) => {
    console.log('Un client si è connesso con id:', socket.id);
    console.log('Numero di client connessi:', rtServer.engine.clientsCount)

    // Avviso tutti i client che un nuovo client si è connesso
    // ad eccezione di quello che si è appena connesso: messaggio broadcast
    socket.broadcast.emit(messages.nuovoAmico, "Nuovo client si è connesso.");

    // Invio a tutti un messaggio con il numero di client connessi: messaggio broadcast
    rtServer.emit(messages.clientConnessi, rtServer.engine.clientsCount);

    // Invio un messaggio di benvenuto al client appena connesso: messaggio unicast
    socket.emit(messages.welcome, "Benenuto nella chat. Per inviare messaggi devi prima registrarti.");

    
    socket.on(messages.registrazione, (nickname) => {
        console.log('Richiesta di registrazione con nickname:', nickname);
        // Controllo che il nickname non sia già stato utilizzato        
        
        if (controlloNickname(nickname)) {
            // Il nickname non è stato utilizzato e quindi lo registro
            socket.data.nickname = nickname;
            // Invio un messaggio di conferma al client
            socket.emit(messages.esitoRegistrazione, { esito: true, nickname: nickname });
            // Creo un array con i nickname dei client connessi
            let nicknames = clientConnessi.map((client) => {
                return client.data.nickname;
            });
            // Invio un broadcast con l'elenco dei nickname
            rtServer.emit(messages.nicknames, nicknames);
        }
        else {
            // Comunico che la registrazione non è andata a buon fine (nome già utilizzato)
            socket.emit(messages.esitoRegistrazione, { esito: false, nickname: nickname });
        }
    });
   
});

async function controlloNickname(nickname) {
    // 1. recupero tutti i socket connessi al server
    const clients = await rtServer.fetchSockets();
    for(const client of clients) {
        if (client.data.nickname === nickname) {
            return false;
        }
    }
    return true;
}