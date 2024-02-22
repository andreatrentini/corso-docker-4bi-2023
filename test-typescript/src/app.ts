import express from 'express';
import config from './config';

const app = express();

/* app.get('/', (req, res) => {
    res.json('Hello world!');
}) */

app.use('/', express.static(config.sitePath))

app.listen(config.port, () => {
    console.log('server avviato...');
})