### Schema

CREATE DATABASE piedPiper_db;
USE piedPiper_db;

CREATE TABLE sales
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_ID varchar(255) not null,
	user_name varchar(255) NOT NULL,
	song_title varchar(255) not null,
	artist_name varchar(255) not null,
	album_name varchar(255) not null,
	updated_on TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_on TIMESTAMP NOT NULL
);


CREATE TABLE users (
id int NOT NULL AUTO_INCREMENT,
user_name VARCHAR(60) COLLATE utf8_unicode_ci NOT NULL,
password VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
created datetime NOT NULL,
 modified datetime NOT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;