import express from 'express';
import config from './config.js';

const __dirname = new URL('.', import.meta.url).pathname;

const app = express();

app.use('/', express.static(__dirname+'/site'))

app.listen(config.port, () =>
  console.log('Example app listening on port 3000!'),
);