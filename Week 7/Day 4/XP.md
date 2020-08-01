# Basic select statement
1. not doable
2. select distinct department_id from employees
3. select * from employees order by first_name desc
4. select first_name, last_name, salary, salary*0.15 as PF  from employees
5. select employee_id, first_name, last_name, salary  from employees order by salary
6. select sum(salary) from employees
7. select employees.first_name, employees.last_name, jobs.min_salary, jobs.max_salary
   from employees
   inner join jobs
   on employees.job_id = jobs.job_id
8. select round(avg(salary), 2), count(*) from employees
9. select count(*) from employees
10.
11. select upper(first_name) from employees
12. select substring(first_name, 0, 4) from employees
13. select 171*214+625
14. select first_name, last_name from employees
15. select trim(first_name) from employees
16. select length(first_name) + length(last_name) as length from employees
17. select first_name from employees where first_name !~ '^[0-9\.]+$'
18. select * from table limit 10
19. select round(salary/12, 2) from employees

# Creates Tables
1. create table countries (
      country_id varchar (2),
      country_name varchar (30),
      region_id integer
  )
2. create table countries (
    country_id varchar (2),
    country_name varchar (30),
    region_id integer,
    foreign key (region_id) references regions (region_id)
  ) 
3. create table dup_countries as (select * from countries) with no data
4. create table dup_countries as (select * from countries)
5. create table countries (
    country_id varchar (2) not null,
    country_name varchar (30) not null,
    region_id integer not null
    )
6. create table jobs (
    job_id serial primary key,
    job_title varchar (50),
    min_salary integer,
    max_salary integer,
    )
7. create table countries
   (
   	country_id varchar check (country_id in ('CN', 'IN', 'IT')), 
   	country_name varchar (30) check (country_name in ('China', 'India', 'Italy')), 
   	region_id integer check (region_id in (3, 1))
   )
8. create table countries 
   (
   	country_id varchar (2) unique, 
   	country_name varchar (30), 
   	region_id integer
   )
9. create table jobs (
   	job_id serial primary key,
   	job_title varchar (50) default '',
   	min_salary integer default 8000,
   	max_salary integer default null
   )
10. create table countries 
    (
    	country_id varchar (2) primary key unique, 
    	country_name varchar (30), 
    	region_id integer
    )
11. create table countries
    (
    	country_id serial primary key unique, 
    	country_name varchar (30), 
    	region_id integer
    )
12. create table countries 
    (
    	country_id varchar (2), 
    	country_name varchar (30), 
    	region_id integer,
    	unique (country_id, region_id)
    )
13. create table job_history (
    	employee_id integer unique,
    	start_date timestamp,
    	end_date timestamp,
    	job_id integer,
    	foreign key (job_id) references jobs (job_id),
    	department_id integer
    )
14. create table employees (
    	employee_id integer unique,
    	first_name varchar (30),
    	last_name varchar (30),
    	email varchar (50),
    	phone_number integer,
    	hire_date timestamp,
    	job_id integer,
    	salary integer,
    	commission integer,
    	manager_id integer,
    	foreign key (manager_id) references employees (employee_id),
    	department_id integer,
    	foreign key (department_id) references departments (department_id), 
    	unique (manager_id, department_id)
    )
15. create table emplossyees (
    	employee_id integer unique,
    	first_name varchar (30),
    	last_name varchar (30),
    	email varchar (50),
    	phone_number integer,
    	hire_date timestamp,
    	job_id integer,
    	foreign key (job_id) references jobs (job_id),
    	check (job_id in (select job_id from jobs)),
    	salary integer,
    	commission integer,
    	manager_id integer,
    	department_id integer,
    	foreign key (department_id) references departments (department_id), 
    	check (department_id in (select department_id from departments))
    )
16. create table emplossyees (
    	employee_id integer unique,
    	first_name varchar (30),
    	last_name varchar (30),
    	email varchar (50),
    	phone_number integer,
    	hire_date timestamp,
    	job_id integer,
    	foreign key (job_id) references jobs (job_id) on update cascade on delete restrict,
    	check (job_id in (select job_id from jobs)),
    	salary integer,
    	commission integer,
    	manager_id integer,
    	department_id integer,
    )
# assume 1
create table employees (
	employee_id integer primary key unique,
	first_name varchar (30),
	last_name varchar (50),
	job_id integer,
	foreign key (job_id) references jobs (job_id) on delete cascade on update restrict,
	salary integer
)
# assume 2
create table employees (
	employee_id integer primary key unique,
	first_name varchar (30),
	last_name varchar (50),
	job_id integer,
	foreign key (job_id) references jobs (job_id) on delete set null on update set null,
	salary integer
)
# assume 3
create table employees (
	employee_id integer primary key unique,
	first_name varchar (30),
	last_name varchar (50),
	job_id integer,
	foreign key (job_id) references jobs (job_id),
	salary integer
)
# Restricting and sorting
1. select first_name, last_name, salary from employees where salary between 10000 and 15000
2. select first_name, last_name, department_id from employees
   where department_id in (30, 100) order by department_id asc
3. select first_name, last_name, salary from employees
   where department_id in (30, 100)
   and salary not between 10000 and 15000
4. select first_name, last_name, hire_date from employees
   where hire_date::text like '1987%'
5. select first_name from employees
   where first_name like '%c%'
   and first_name like '%e%'
6. select employees.last_name, jobs.job_title, employees.salary
   from employees
   inner join jobs
   on employees.job_id = jobs.job_id
   where jobs.job_title not in ('Programmer', 'Shipping Clerk')
   and employees.salary not in (4500, 10000, 15000)
7. select last_name from employees
   where length(first_name) = 6
8. select first_name, last_name from employees
   where first_name like '__e%'
9. select distinct jobs.job_title from employees
   inner join jobs
   on employees.job_id = jobs.job_id
10. select first_name, last_name, salary, salary*0.15 as PF from employees
11. where last_name in ('Jones', 'Blake', 'Scott', 'King', 'Ford')