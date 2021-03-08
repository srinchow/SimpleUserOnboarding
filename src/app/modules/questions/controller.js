const { Utils } = require('../../utils/index');
const BlManager = require('../questions/manager');
const { apiFailureMessage, apiSuccessMessage, failureMessage, httpConstants } = require('../../common/constant');


exports.questionController = class questionController {
    //Add Question

    static async addQuestion(request, response) {
        if (!request || !request.body || !request.body.qid || !request.body.text) {
            Utils.webLog('Illegal Request Parameter', {}, "Add Question", 0, 'Srinjoy', apiFailureMessage.BAD_REQUEST);
        }

        let [error, result] = await Utils.parseResponse(new BlManager().addQuestion(request.body.qid, request.body.text));

        if (error) {
            return Utils.response(response, error, apiFailureMessage.GET_FAIL, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);
        }
        return Utils.response(response, {}, apiSuccessMessage.GET_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);

    }

    // Get all Questions
    static async getAllQuestion(request, response) {

        if (!request) {

        }

        let [error, result] = await Utils.parseResponse(new BlManager().getAllQuestions());

        if (error) {
            return Utils.response(response, error, apiFailureMessage.GET_FAIL, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.NOT_FOUND);
        }

        return Utils.response(response, result, apiSuccessMessage.GET_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK);
    }



}