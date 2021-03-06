const UserModel = require('../../models/UserModel/index');


class BLManager {

    async AddAnswers(answer, user) {
        try {
            return await UserModel.AddAnswers(user, answers);
        }
        catch (err) {
            console.log(err);
        }
    }

    async calUserScore(user) {
        try {
            return "34%";
        }
        catch (err) {
            console.log(err);
        }
    }


    async GetAnswers(user) {

        try {
            let { userId, username } = user;

            let answers = await UserModel.getAnswers(userId);
            return answers;

        }
        catch (err) {
            console.log(err);
        }

    }


}

module.exports = BLManager;