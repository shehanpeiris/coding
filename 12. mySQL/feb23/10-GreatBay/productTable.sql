DROP DATABASE IF EXISTS biddieDB;

CREATE DATABASE biddieDB;

USE biddieDB;

CREATE TABLE auction_list (
 id INT NOT NULL AUTO_INCREMENT,
 item_name VARCHAR(45) NULL,
 category VARCHAR(45) NULL,
 starting_bid integer(10) NULL,
 highest_bid integer(10) NULL,
 PRIMARY KEY (id)
);


-- USE THIS LANGUAGE TO ADD INFO LATER --
INSERT INTO auction_list (item_name, category, starting_bid)
VALUES ("bicycle", "transportation", 100);

INSERT INTO auction_list (item_name, category, starting_bid)
VALUES ("basketball cards", "memorabilia", 300);

INSERT INTO products (flavor, price, quantity)
VALUES ("strawberry", 3.25, 75);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
