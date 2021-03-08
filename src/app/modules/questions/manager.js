const UserModel = require('../../models/UserModel/index');


class BLManager {

    async addQuestion(qid, text) {
        let result = await UserModel.addQuestion(qid, text);
        return result;
    }

    async getAllQuestions() {
        console.log("here");
        let result = await UserModel.getAllQuestions();
        return result;
    }

}

module.exports = BLManager;