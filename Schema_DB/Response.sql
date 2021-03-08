CREATE TABLE Response(
    `userId` int NOT NULL,
    `qid` int NOT NULL,
    `Type` ENUM
('MCQ','TIME'),
    `response` VARCHAR
(500),
    PRIMARY KEY
(`userId`,`qid`),
    FOREIGN KEY
(`userId`) REFERENCES `Users`
(`userId`) ON
DELETE CASCADE,
    FOREIGN KEY(`qid`) REFERENCES `Question
`
(`qid`) ON
DELETE CASCADE
);

