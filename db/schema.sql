### Schema

CREATE DATABASE piedPiper_db;
USE piedPiper_db;


CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(50) NOT NULL,
password VARCHAR(10) NOT NULL,
created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
last_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE orders (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(255) NOT NULL,
song_title VARCHAR(255) NOT NULL,
artist_name VARCHAR(255) NOT NULL,
album_name VARCHAR(255) NOT NULL,
link  VARCHAR(255) NOT NULL,
purchase_date  DATETIME DEFAULT CURRENT_TIMESTAMP,
purchase_price DECIMAL(5,2),
created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
last_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
