CREATE TABLE student(
	id SERIAL PRIMARY KEY,
	f_name VARCHAR(50) NOT NULL,
	l_name VARCHAR(50) NOT NULL,
	dob timestamp NOT NULL
)

INSERT INTO student(f_name, l_name, dob) VALUES
('Marc', 'Dupont', '1998-11-02 00:00:00'),
('Yoan', 'Durant', '2010-03-12 00:00:00'),
('Lea', 'Martin', '1987-07-24 00:00:00'),
('Sarah', 'Benichou', '1996-04-07 00:00:00'),
('Iea', 'Dupont', '2003-06-14 00:00:00'),
('Omer', 'Simpson', '1980-03-10 00:00:00')

INSERT INTO student(f_name, l_name, dob) VALUES ('Alon', 'Ganot', '1999-01-08 23:51:00')

insert into student(f_name, l_name, dob) values
('a', 'aa', 'today'),
('b', 'bb', 'yesterday')

select * from student

select f_name, l_name from student

select f_name, l_name from student where id = 2

select f_name, l_name from student where l_name = 'Dupont' or f_name = 'Marc'

select f_name, l_name from student where f_name like '%a%'

select f_name, l_name from student where f_name like 'a%'

select f_name, l_name from student where f_name like '%a'

select f_name, l_name from student where f_name like '%a_'

select f_name, l_name from student where id in (1, 3)

select f_name, l_name, dob from student where dob >= timestamp '2000-01-01'