// Carico il modulo express e lo associo alla costante express
const express = require('express');
const config = require('./config ');

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

service.use('/', express.static(directorySito));

const server = service.listen(config.port, () => {
    console.log('Server in ascolto sulla porta ' + config.port + '...');
})


