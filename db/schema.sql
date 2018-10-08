CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

USE foncor7yzmqi3qrf;
DROP TABLE burgers;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);
ALTER TABLE burgers CHANGE `createdAt` `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

