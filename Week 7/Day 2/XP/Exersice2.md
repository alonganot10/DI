select * from items order by price asc

select * from items where price > 80 order by price desc

select f_name, l_name from customer order by f_name limit 3

select f_name, l_name from customer order by f_name desc limit 2

select l_name from customer order by l_name desc

create table purchases(
	id serial primary key,
	customer_id integer not null,
	item_id integer not null,
	foreign key (customer_id) references customer (id),
	foreign key (item_id) references items (id)
)

insert into purchases(customer_id) values(1)
- doesnt work because item_id cannot be null

insert into purchases (customer_id, item_id) values
((select id from customer where id = 1), (select id from items where id = 1)),
((select id from customer where id = 2), (select id from items where id = 2)),
((select id from customer where id = 3), (select id from items where id = 3)),
((select id from customer where id = 4), (select id from items where id = 4)),
((select id from customer where id = 5), (select id from items where id = 5))

select * from purchases
- kinda useful but nor really since it does not show all the info

select customer.f_name, customer.l_name, purchases.item_id from customer inner join purchases on customer.id = purchases.customer_id

select * from purchases where customer_id = 4

select purchases.* from purchases inner join items on items.id = purchases.item_id and items.furniture in ('Small desk', 'Large desk')

insert into items (furniture, price) values ('Hard drive', 90);
insert into purchases(customer_id, item_id) values
(
	(select id from customer where f_name = 'Scott' and l_name = 'Scott'),
	(select id from items where furniture = 'Hard drive')
)

delete from purchases using customer where purchases.customer_id = customer.id and customer.f_name = 'Scott';
delete from customer where f_name = 'Scott'

@ all the purchases were deleted

select customer.f_name, customer.l_name, items.furniture 
from purchases 
inner join customer on customer.id = purchases.customer_id 
inner join items on items.id = purchases.item_id

