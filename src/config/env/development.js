module.exports = {
    REDIS_END_POINT: process.env.REDIS_END_POINT || "",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    PORT: process.env.PORT || 3100,
    ENV: process.env.ENV || "-dev",
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || "",
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || "",
    AWS_DYNAMO_END_POINT: process.env.AWS_DYNAMO_END_POINT || "",
    AWS_REGION: process.env.AWS_REGION || "",
    KAFKA_HOST: process.env.KAFKA_HOST || "",
    JWT_KEY: process.env.JWT_KEY || "defaultpass",
    IS_CONSOLE_LOG: "true"
}