const db = require('../../../config/db');
const { Utils } = require("../../utils/index");

exports.getUser = async (username) => {

    try {
        let result = await db.query('SELECT * FROM Users WHERE username = ?', [username]);

        if (result.length == 0) {
            throw new Error('No such username in Table');
        }
        else {
            return result[0];
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.addAnswer = async (userId, answer) => {

    try {
        let result = await db.query('INSERT INTO RESPONSE(userId,qId,answerType,answer) VALUES (?,?,?,?)', [userId, ...answer]);

        return true;

    }
    catch (err) {

    }
}

exports.getAnswers = async (userId) => {
    try {
        let result = await db.query('SELECT * FROM Response where userId = ?', [userId]);

        if (result.length != 0) {
            return result;
        }
    }
    catch (err) {
        console.log(err);
    }
}