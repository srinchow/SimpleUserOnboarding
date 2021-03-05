const morgan = require('morgan');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require("helmet");

module.exports = function (app) {
    app.use(helmet());
    // logs incoming requests with endpoint and response time
    app.use(morgan(':method :url :response-time'));
    // parse application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));
    // parse application/json
    app.use(express.json());
    // compression of data
    app.use(compression(9));
    app.use(cors());
}
