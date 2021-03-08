const db = require('../../../config/db');
const { Utils } = require("../../utils/index");

exports.getUser = async (username) => {

    let result = await db.query('SELECT * FROM Users WHERE username = ?', [username]);

    if (result.length == 0) {
        throw new Error('No such username in Table');
    }
    else {
        return result[0];
    }


}

exports.addUser = async (username, hashedpassword) => {

    let result = await db.query('INSERT INTO Users(username,password) VALUES (?,?)', [username, hashedpassword]);

    if (result) {
        return true;
    }

}

exports.addAnswer = async (userId, answer) => {


    let result = await db.query('INSERT INTO Response(userId,qid,Type,response) VALUES (?,?,?,?)', [userId, ...answer]);

    return result;

}

exports.getAnswers = async (userId) => {
    let result = await db.query('SELECT * FROM Response where userId = ?', [userId]);

    if (result.length != 0) {
        return result;
    }


}


exports.addQuestion = async (qid, text) => {

    let result = await db.query('INSERT INTO Question(qid,text) VALUES (?,?)', [qid, text]);

    return result


}

exports.getAllQuestions = async () => {
    let result = await db.query('SELECT * FROM Question;');
    return result;


}

