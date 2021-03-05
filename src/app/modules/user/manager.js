import config from '../../../config';

const UserModel = require('../../models/UserModel/index');

class BLManager {

    async AddAnswers(answers, user) {
        try {
            return await UserModel.AddAnswers(user, answers);
        }
        catch (err) {
            console.log(err);
        }
    }


    async GetAnswers(user) {

        try {
            return await UserModel.GetAnswers(user);
        }
        catch (err) {
            console.log(err);
        }

    }


}

export default BLManager;