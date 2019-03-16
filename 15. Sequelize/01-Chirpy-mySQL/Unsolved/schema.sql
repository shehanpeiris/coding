CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(30),
  chirp VARCHAR(280),
  timestamp TIME,
  PRIMARY KEY (id)
);