const config = require('../../../config/index');

const UserModel = require('../../models/UserModel/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class BLManager {

    async Login(req) {
        try {
            if (!req || !req.email || !req.password)
                throw Utils.error({}, apiFailureMessage.INVALID_PARAMS, httpConstants.RESPONSE_CODES.BAD_REQUEST);

            let User = await UserModel.getUserInfo(req.email);

            if (User) {
                let result = await bcrypt.compare(req.password, User.password);

                if (result) {
                    const accessToken = jwt.sign({ username: User.username, Id: User.Id }, config.JWT_KEY);
                }
            }
            else {

            }
        }
        catch (err) {
            console.log(err);
        }
    }


}

module.export = BLManager;