### Schema

CREATE DATABASE burgermaker_db;
USE burgermaker_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	consumed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
