const UserModel = require('../../models/UserModel/index');


class BLManager {

    async AddAnswers(answer, user) {
        try {
            return await UserModel.addAnswer(user, answer);
        }
        catch (err) {
            console.log(err);
        }
    }

    async calUserScore(user) {
        try {
            return "34%"; // this score eventually calculated by the answer values;
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