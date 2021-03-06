module.exports = {
    REDIS_END_POINT: process.env.REDIS_END_POINT || "",
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    PORT: process.env.PORT || 3100,
    ENV: process.env.ENV || "-dev",
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || "sxt6e",
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || "i6sxk",
    AWS_DYNAMO_END_POINT: process.env.AWS_DYNAMO_END_POINT || "http://localhost:8000",
    AWS_REGION: process.env.AWS_REGION || "local",
    KAFKA_HOST: process.env.KAFKA_HOST || "",
    JWT_KEY: process.env.JWT_KEY || "defaultpass",
    IS_CONSOLE_LOG: "true",
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_NAME: process.env.DB_NAME || 'Wysa',
    DB_PASS: process.env.DB_PASS || '12345678',

}