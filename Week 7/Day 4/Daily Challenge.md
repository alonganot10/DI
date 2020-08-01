create table items (
	id serial primary key,
	name varchar (50),
	price integer
)
create table orders (
	id serial primary key,
	item_id integer,
	foreign key (item_id) references items (id)
)

select orders.id, items.name, items.price
from orders
inner join items
on orders.item_id = items.id