// La costante messages è un oggetto che contiene i messaggi che il server invia al client e viceversa
const messages = {
    connection: 'connection',    
    nuovoAmico: 'nuovoamico',
    clientConnessi: 'clientconnessi',
    welcome: 'welcome',
    registrazione: 'registrazione',
    esitoRegistrazione: 'confermaregistrazione',
    nicknames: 'nicknames',
    nuovoMessaggio: 'nuovomessaggio',
    elencoMessaggi: 'elencomessaggi'
}

// Se esiste l'oggetto module e l'oggetto module.exports, esporta la costante messages (viene eseguita
// solo se il codice è eseguito da Node.js, non da un browser)
// === e !== sono operatori di uguaglianza e disuguaglianza stretta: vengono confrontati i valori e i tipi

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = messages;
} 