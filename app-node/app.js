// Import delle librerie utilizzate dall'applicazione (package node oppure oggetti/funzioni definite in file esterni)
const express = require('express');
const config = require('./config.js');

// Definisco un oggetto istanza della classe Express per configurare il mio servizio web

const webService = express();

// Eseguo codice a seconda della richiesta HTTP che arriva al mio servizio

webService.get('/hello', (richiesta, risposta) => {
    risposta.send('<h1>Hello world!</h1>');
});

// Dichiaro e metto in ascolta un server configurato sul servizio appena creato

const server = webService.listen(config.port, () => {
    console.log('Server in ascolto sulla porta: ', config.port)
})