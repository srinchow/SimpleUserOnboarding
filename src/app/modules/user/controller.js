const { Utils } = require('../../utils/index');
const BlManager = require('./manager');
const { apiFailureMessage, apiSuccessMessage, failureMessage, httpConstants } = require('../../common/constant');


exports.userController = class userController {
    //Add UserAnswer
    static async addAnswer(request, response) {

        if (!request || !request.body || !request.body.answers || !(Array.isArray(request.body.answers)) || (request.body.answers.length != 3)) {
            Utils.webLog('Illegal Request Parameter', {}, "Add Answer", 0, 'Srinjoy', apiFailureMessage.BAD_REQUEST);
            return Utils.handleError({ code: httpConstants.RESPONSE_CODES.BAD_REQUEST }, request, response);
        }

        let [error, Addresult] = await Utils.parseResponse(new BlManager().addAnswer(request.body.answer, req.User));

        if (error) {
            return Utils.response(response, error, apiFailureMessage.ALREADY_EXISTS, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.BAD_REQUEST)

        }
        else {
            return Utils.response(response, Addresult, apiSuccessMessage.ADD_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
        }
    }


    static async getAnswers(request, response) {

        if (!request || !request.User) {
            Utils.webLog('Illegal Request Parameter', {}, "Get All Answers", 0, 'Srinjoy', apiFailureMessage.BAD_REQUEST);
            return Utils.handleError({ code: httpConstants.RESPONSE_CODES.BAD_REQUEST }, request, response);

        }

        let [error, GetAnswer] = await Utils.parseResponse(new BlManager().getAnswers(request.User));

        if (error) {
            return Utils.response(response, error, apiFailureMessage.GET_FAIL, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);
        }
        else {
            return Utils.response(response, GetAnswer, apiSuccessMessage.GET_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
        }
    }


}