const { httpConstants } = require('./src/app/common/constant');
const app = require('express')();
const { Utils } = require('./src/app/utils');

global.webLog = Utils.webLog;
global.basedir = __dirname;

const PORT = process.env.PORT || 3004;
const http = require('http').Server(app);
global.io = require('socket.io')(http);
require('./src/config/express')(app);
require('./src/routes')(app);


Promise.all([]
).then(listen).catch((err) => {
    Utils.webLog("Error", {}, "listen")
})

function listen() {
    app.listen(PORT);
    webLog('listen', `Server Started on port ${PORT}`, {}, "", '', httpConstants.LOG_LEVEL_TYPE.INFO);
}
