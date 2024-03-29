import  express from 'express';
import config from './config';
const app = express();

app.use('', express.static(config.siteDir));

const server = app.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
});