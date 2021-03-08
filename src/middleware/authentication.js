const { httpConstants } = require('../app/common/constant');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
const { Utils } = require('../app/utils');

exports.authorizeUser = async (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        token = token.replace(/^Bearer\s+/, "");

        if (!token) {
            webLog('Unable to access Auth Token', {}, 'AuthToken', 0, 'Srinjoy', httpConstants.LOG_LEVEL_TYPE.INFO);
            return Utils.handleError({ code: 401, message: 'Auth Header Missing' }, req, res);
        }

        //console.log(config.JWT_KEY);

        try {
            let decoded = jwt.verify(token, 'shhh');
            req.user = decoded;
            next();
        }
        catch (err) {
            console.log(err);
            return Utils.response(res, err, 'failed', httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.UNAUTHORIZED);
        }
    }
    catch (err) {
        console.log(err);
        return Utils.response(res, err, 'failed', httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.UNAUTHORIZED);
    }

}



exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.role == 10) next();
        else {
            return Utils.response(res, {}, 'failed', httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.UNAUTHORIZED);
        }
    }
    catch (err) {
        console.log(err);
        return Utils.response(res, {}, 'failed', httpConstants.RESPONSE_STATUS.FAILURE, httpConstants.RESPONSE_CODES.UNAUTHORIZED);
    }
}

