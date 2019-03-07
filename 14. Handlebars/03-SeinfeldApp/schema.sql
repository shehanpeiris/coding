-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors
(
  id INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  coolness_points INT,
  attitude VARCHAR,
  PRIMARY KEY
  (id)
);
