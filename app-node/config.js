const config =  {
    port: 3000,
    messagesId: {
        connection: 'connection',
        welcome: 'welcome',
        registration: 'registration'
    }
}

function printConfig() {
    console.log(config);
}

module.exports = {config, printConfig};
