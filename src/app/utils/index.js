const { httpConstants, failureMessage } = require('../common/constants');
const decode = require("jwt-decode")

export default class Utils {

    static response(res, data, message, success, code) {
        let messageObj = {
            "param": "",
            "msg": message,
        };

        let responseObj = {
            responseData: data,
            message: [messageObj],
            success: success,
            responseCode: code
        };
        res.format({
            json: () => {
                res.send(responseObj);
            }
        });
    };

    static handleError(err, req, res) {
        if (!res)
            return false;
        err = err || {};
        const msg = err.message ? err.message : failureMessage.INTERNAL_SERVER_ERROR;
        const code = err.code ? err.code : httpConstants.RESPONSE_CODES.SERVER_ERROR;
        this.response(res, {}, msg, httpConstants.RESPONSE_STATUS.FAILURE, code);
    };


    static async parseResponse(promise) {
        return promise.then(data => {
            return [null, data];
        }).catch(err => [err]);
    };

    static webLog(message, payload = {}, methodName, requestID = 0, developerName = 'Developer', type = 'info') {
        if (Config.IS_CONSOLE_LOG === "true") {
            console.log(JSON.stringify({
                message: message,
                developerAlias: developerName,
                requestID: requestID,
                type: type,
                timestamp: new Date(),
                payload: payload
            }));
        }
    }


    static JWTdecode(token) {
        return decode(token)
    }

    static generateRamdomPassword() {
        let passwd = '';
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let index = 1; index < 8; index++) {
            let str = Math.floor(Math.random() * chars.length + 1);
            passwd += chars.charAt(str)
        }

        let specialChars = "@!$%#&*"
        let str = Math.floor(Math.random() * specialChars.length + 1);
        passwd += specialChars.charAt(str)

        return passwd;

    };
}