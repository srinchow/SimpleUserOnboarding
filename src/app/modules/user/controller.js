const { Utils } = require('../../utils/index');
const BlManager = require('../user/manager');
const { apiFailureMessage, apiSuccessMessage, failureMessage, httpConstants } = require('../../common/constant');
const BLManager = require('../user/manager');


exports.userController = class userController {
    //Add UserAnswer
    static async addAnswer(request, response) {

        if (!request || !request.body || !request.body.answers || !(Array.isArray(request.body.answers)) || (request.body.answers.length != 3)) {
            Utils.webLog('Illegal Request Parameter', {}, "Add Answer", 0, 'Srinjoy', apiFailureMessage.BAD_REQUEST);
            return Utils.handleError({ code: httpConstants.RESPONSE_CODES.BAD_REQUEST }, request, response);
        }

        console.log(request.user, request.body.answers);

        let [error, Addresult] = await Utils.parseResponse(new BlManager().AddAnswers(request.body.answers, request.user.userId));

        if (error) {
            return Utils.response(response, error, apiFailureMessage.ALREADY_EXISTS, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.BAD_REQUEST)

        }
        else {
            return Utils.response(response, Addresult, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
        }
    }


    static async getAnswers(request, response) {

        if (!request || !request.user) {
            Utils.webLog('Illegal Request Parameter', {}, "Get All Answers", 0, 'Srinjoy', apiFailureMessage.BAD_REQUEST);
            return Utils.handleError({}, req, res);

        }


        let [error, Answers] = await Utils.parseResponse(new BlManager().GetAnswers(request.user));

        if (error) {
            return Utils.response(response, error, apiFailureMessage.GET_FAIL, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);
        }
        else {
            return Utils.response(response, Answers, apiSuccessMessage.GET_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
        }
    }

    static async calScore(request, response) {
        if (!request || !request.user) {
            Utils.webLog('Illegal Request Parameter', {}, "Get All Answers", 0, 'Srinjoy', apiFailureMessage.BAD_REQUEST);
            return Utils.handleError({}, req, res);
        }

        let [error, score] = await Utils.parseResponse(new BlManager().calUserScore(request.user));

        if (error) {
            return Utils.response(response, error, apiFailureMessage.GET_FAIL, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);
        }
        else {
            return Utils.response(response, score, apiSuccessMessage.GET_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
        }


    }


}