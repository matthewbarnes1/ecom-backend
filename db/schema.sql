DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;
USE ecommerce_db;


CREATE TABLE Category (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE Product( 
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 10,
--   ! Check to see if this is correct for referencing the category id
  category_id REFERENCES Category(id)
)

CREATE TABLE Tag (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(30)
);

CREATE TABLE ProductTag (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id REFERENCES Product(id),
  tag_id REFERENCES Tag(id)
);


