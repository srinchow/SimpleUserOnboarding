const process = require('process');
const { endPoints } = require('../app/common/constant');
const { authorizeUser } = require("../middleware/authentication");
const { userController } = require('../app/modules/user/controller');
const { authController } = require('../app/modules/authentication/controller');

module.exports = function (app) {

    app.get(endPoints.healthCheck, async (req, res) => {
        return res.send(`HealthCheck Utility Service is working fine hitting process ${process.pid}`);
    });

    app.post(endPoints.login, authController.login);
    app.post(endPoints.addAnswers, authorizeUser, userController.addAnswer);

    app.get(endPoints.getAnswers, authorizeUser, userController.getAnswers);

    app.get(endPoints.home, authorizeUser, async (req, res) => {
        return res.send('Home Page');
    })


};


