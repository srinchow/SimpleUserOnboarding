const config = require('../../../config/index');
const UserModel = require('../../models/UserModel/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class BLManager {

    async Login(req) {
        try {

            let User = await UserModel.getUser(req.email);
            if (User) {
                let res = bcrypt.compare(req.password, User.password)
                await res;

                if (res) {
                    const accessToken = jwt.sign({ username: req.username }, config.JWT_KEY);
                    return accessToken;
                }
            }
            else {
                return null
            }
        }
        catch (err) {
            console.log(err);
        }
    }


}

module.exports = BLManager;