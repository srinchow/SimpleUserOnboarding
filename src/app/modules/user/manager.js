const UserModel = require('../../models/UserModel/index');


class BLManager {

    async AddAnswers(answer, user) {
        try {
            console.log(answer, user);
            return await UserModel.addAnswer(user, answer);
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async calUserScore(user) {
        try {
            return "34%"; // this score eventually calculated by the answer values;
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
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
            throw new Error(err);
        }

    }

    async isOnboarded(user) {
        try {
            let { userId, username } = user;

            console.log(userId);
            let answers = await UserModel.getAnswers(userId);
            let question = await UserModel.getAllQuestions();

            answers = answers || [];
            console.log(answers, question);

            if (answers.length === question.length) return true;
            else return false;
        }
        catch (err) {
            throw new Error(err);
        }
    }

}

module.exports = BLManager;