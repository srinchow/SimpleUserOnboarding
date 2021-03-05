const { httpConstants } = require('../app/common/constant');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
const { default: Utils } = require('../app/utils');

exports.authorizeUser = async (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token) {
        webLog('Unable to access Auth Token', {}, 'AuthToken', 0, 'Srinjoy', httpConstants.LOG_LEVEL_TYPE.INFO);
        return Utils.handleError({ code: 401, message: 'Auth Header Missing' }, req, res);
    }

    jwt.verify(token, config.JWT_KEY, (err, decoded) => {
        if (err) {
            webLog('Invalid Auth Token', {}, 'AuthToken', 0, 'Srinjoy', httpConstants.LOG_LEVEL_TYPE.INFO);
            return Utils.handleError({ code: 500, message: 'Token Invalid' }, req, res);
        }

        else {
            next();
        }
    })

}