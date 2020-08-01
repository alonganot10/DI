create table one_to_one (
	id serial primary key
);
create table one_to_one2 (
	id integer primary key,
	constraint fk_id foreign key (id) references one_to_one (id)
);
create table one_to_many (
	id integer primary key,
	foreign key (id) references one_to_one (id)
);
create table many_to_many (
	one integer,
	many integer,
	foreign key (one) references one_to_one (id),
	foreign key (many) references one_to_many (id)
);