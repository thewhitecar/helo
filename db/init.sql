CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT);

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title varchar(45),
img text,
content text,
author_id INTEGER REFERENCES users
);



insert into users (username, password, profile_pic)
VALUES ('ryanwhitecar', 'password', 'https://s3.pixers.pics/pixers/700/FO/56/39/67/55/700_FO56396755_cf602a291070a7d14945dcff0348a014.jpg');