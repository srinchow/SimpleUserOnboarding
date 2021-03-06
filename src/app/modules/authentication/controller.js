const { Utils } = require('../../utils/index');
const BlManager = require('../authentication/manager');
const { apiFailureMessage, apiSuccessMessage, failureMessage, httpConstants } = require('../../common/constant');


exports.authController = class authController {
    //Login User

    static async login(request, response) {

        if (!request || !request.body.username || !request.body.password) {
            webLog('Request Body Incomplete in Login', {}, "login", 0, 'Srinjoy', apiFailureMessage.INVALID_REQUEST)
            return Utils.handleError({ code: 400, message: 'No username or passowrd' }, request, response, httpConstants.LOG_LEVEL_TYPE.ERROR);
        }

        let [error, loginResponse] = await Utils.parseResponse(new BlManager().Login(request.body));


        if (error) {
            return Utils.response(response, error, apiFailureMessage.FAILED_TO_LOGIN, httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.FORBIDDEN)
        }
        else {
            return Utils.response(response, loginResponse, apiSuccessMessage.LOGIN_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
        }
    }


}