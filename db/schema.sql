DROP DATABASE IF EXISTS notepad_db;
CREATE DATABASE notepad_db;
USE notepad_db;

-- Create the characters table
CREATE TABLE notepad
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (255) NOT NULL,  
  notes VARCHAR (255) NOT NULL,
  PRIMARY KEY(id)
);