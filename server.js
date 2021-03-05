const httpConstants = require()
const app = require('express')();
const Utils = require('./app/utils');
const Config = require('./config/index');

global.webLog = Utils.webLog;
global.basedir = __dirname;

const PORT = process.env.PORT || 3004;
const db = require('./config/db');
const http = require('http').Server(app);
global.io = require('socket.io')(http);
require('./config/express')(app);
require('./routes')(app);

Promise.all([]
).then(listen).catch((err) => {
    webLog("Error", {}, "listen")
})

function listen() {

    webLog('listen', `connect to amqp ${Config.AMQP_HOST_URL}`, {}, "", '', httpConstants.LOG_LEVEL_TYPE.INFO);
    app.listen(PORT);
    webLog('listen', `Server Started on port ${PORT}`, {}, "", '', httpConstants.LOG_LEVEL_TYPE.INFO);
}
