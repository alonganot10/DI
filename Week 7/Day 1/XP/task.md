CREATE TABLE items(
	id SERIAL PRIMARY KEY,
	furniture VARCHAR(50) NOT NULL,
	price smallint NOT NULL
)

CREATE TABLE customers(
	id SERIAL PRIMARY KEY,
	f_name = VARCHAR(50) NOT NULL,
	l_name = VARCHAR(50) NOT NULL
)

INSERT INTO items(furniture, price) VALUES
('Small Desk', 100),
('Large desk', 300),
('Fan', 80)

INSERT INTO customer(f_name, l_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson')

SELECT * FROM items

SELECT * FROM items WHERE price > 80

SELECT * FROM items WHERE price < 30

SELECT * FROM customer WHERE l_name = 'Smith'

SELECT * FROM customer WHERE f_name != 'Craig'