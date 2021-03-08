const process = require('process');
const { endPoints } = require('../app/common/constant');
const { authorizeUser, isAdmin } = require("../middleware/authentication");
const { userController } = require('../app/modules/user/controller');
const { authController } = require('../app/modules/authentication/controller');
const { questionController } = require('../app/modules/questions/controller');

module.exports = function (app) {



    app.get(endPoints.healthCheck, async (req, res) => {
        return res.send(`HealthCheck Utility Service is working fine hitting process ${process.pid}`);
    });

    /*
    auth Apis
    */
    app.post(endPoints.login, authController.login);
    app.post(endPoints.signup, authController.signup);


    /*
    Answers Apis
    */
    app.post(endPoints.addAnswers, authorizeUser, userController.addAnswer);
    app.get(endPoints.getAnswers, authorizeUser, userController.getAnswers);


    /*
    Questions Apis
    */

    app.post(endPoints.addQuestion, authorizeUser, isAdmin, questionController.addQuestion);
    app.get(endPoints.getAllQuestions, authorizeUser, isAdmin, questionController.getAllQuestion);

    app.get(endPoints.home, authorizeUser, async (req, res) => {
        return res.send('Home Page');
    })


};


