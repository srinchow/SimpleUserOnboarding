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
                    const accessToken = jwt.sign({ username: req.username, userId: User.userId, role: User.role }, 'shhh');
                    return accessToken;
                }
            }
            else {
                return null
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async SignUp(req) {

        try {
            let { username, password } = req;

            let hashedpassword = bcrypt.hashSync(password, 10);
            console.log(username, hashedpassword);

            let addUserResponse = await UserModel.addUser(username, hashedpassword);

            return addUserResponse;

        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

}

module.exports = BLManager;