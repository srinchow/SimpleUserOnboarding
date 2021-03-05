const AWS = require("aws-sdk");
const config = require("../../../config/index");



const getUser = async (username) => {

    try {

        AWS.config.update({
            region: 'local',
            endpoint: 'http://localhost:8000'
        })
        const params = {
            TableName: 'Users',
            KeyConditionExpression: 'username = :username',
            ExpressionAttributeValues: {
                ':username': username
            }

        }

        const docClient = new AWS.DynamoDB.DocumentClient()
        let result = await docClient.query(params).promise();

        return result.Items;
    }
    catch (err) {
        console.log(err);
    }
}


const addAnswer = async (username, answers) => {

    updateAWSConfigForDynamo(config.AWS_ACCESS_KEY, config.AWS_DYNAMO_END_POINT, config.AWS_SECRET_KEY, config.AWS_AWS_REGION);
    const params = {
        TableName: 'Users',
        UpdateExpression: 'set Answers = list_append(if_not_exists(Answers, :empty_list), :Answers)',
        ExpressionAttributeValues: { ':Answers': [...answers], ':empty_list': [] }

    }
}

module.exports = {
    addAnswer,
    getUser
}