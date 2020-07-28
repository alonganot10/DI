update student set f_name = 'Lea' where f_name = 'Iea'

update student set dob = '1998-11-02' where l_name = 'Dupont'

delete from student where f_name = 'Lea' and l_name = 'Dupont'

select count(*) from student

select count(*) from student where dob > '2000-01-01'::timestamp

alter table student add column math smallint

update student set math = 80 where id = 1

update student set math = 90 where id in (2, 4)

update student set math = 100 where id = 6

select count(*) from student where math > 83

insert into student (f_name, l_name, dob, math) values
('Omer', 'Simpson', '1980-03-10', 70)

select f_name, l_name, count(math) from student group by f_name, l_name

select sum(math) from student