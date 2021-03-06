CREATE TABLE Users(
    `userId` int
(11) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR
(100) NOT NULL,
     `password` VARCHAR
(200) NOT NULL,
     `role` int
(20) NOT NULL DEFAULT '0',
     PRIMARY KEY
(`userId`),
     UNIQUE KEY
(`username`),

);
