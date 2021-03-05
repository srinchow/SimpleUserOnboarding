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
            let { username } = user;

            let UserObj = await UserModel.getUser(username)

            return UserObj.Answers

        }
        catch (err) {
            console.log(err);
        }

    }


}

module.export = BLManager;