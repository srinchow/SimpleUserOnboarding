const config = require('../../../config/index');
const UserModel = require('../../models/UserModel/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class BLManager {

    async Login(req) {
        try {

            let User = await UserModel.getUser(req.username);
            if (User) {

                let res = bcrypt.compare(req.password, User.password)
                await res;

                if (res) {
                    console.log(config.JWT_KEY);
                    const accessToken = jwt.sign({ username: req.username, userId: User.userId }, 'shhh');
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