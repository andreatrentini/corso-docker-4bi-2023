import IConfig from "./i-config";
const config: IConfig = {
    port: 3000,
    sitePath:  new URL('.', process.cwd()).pathname + '/site'
}

export default config;