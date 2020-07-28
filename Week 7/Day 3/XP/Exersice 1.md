update film
set language_id = 2
where film_id in (73, 168, 360, 361)


insert into customer (store_id, first_name, last_name, email, address_id, activebool, create_date, active) values
(1, 'alon', 'ganot', 'alonganot@gmail.com', 5, true, 'now', 1),
(1, 'balon', 'banot', 'balonbanot@gmail.com', 5, true, 'now', 1),
(1, 'calon', 'canot', 'caloncanot@gmail.com', 5, true, 'now', 1)


insert into film (title, language_id, rental_rate, replacement_cost, last_update, fulltext) values
('a', 1, 4.99, 24.99, 'now', 'trjgrbdhy'),
('b', 1, 4.99, 24.99, 'now', 'trjgrbdhy'),
('c', 1, 4.99, 24.99, 'now', 'trjgrbdhy')


didnt create customer_review if its on delete no action it will be needed to delete any connection it got to other tables before it if cascading then it will be deleted on the spot including the parts its connected via tables


1. select film.title, film.description, actor.first_name, actor.last_name
   from film
   inner join film_actor
   on film.film_id = film_actor.film_id
   and film.description like '%Sumo Wrestler%'
   inner join actor
   on film_actor.actor_id = actor.actor_id
   and actor.first_name = 'Penelope'
   and actor.last_name = 'Monroe'
2. select film.title, category.name, film.length, film.rating from film
   inner join film_category
   on film.film_id = film_category.film_id
   inner join category
   on film_category.category_id = category.category_id
   where film.length < 60 
   and film.rating = 'R' 
   and category.name = 'Documentary'
3. with friend as (
    select rental.inventory_id
    from rental
    inner join payment
    on rental.rental_id = payment.rental_id
    and rental.return_date between '2005-07-28' and '2005-08-1'
    inner join customer
    on customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
    and customer.customer_id = rental.customer_id
   )
   select film.*
   from film
   inner join inventory
   on film.film_id = inventory.film_id
   and film.rental_rate > 4
   inner join friend
   on friend.inventory_id = inventory.inventory_id
   and film.film_id = inventory.film_id
4.  with friend as (
       	select rental.inventory_id
       	from rental
       	inner join customer
       	on customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
       	and customer.customer_id = rental.customer_id
       )
    select distinct film.title, film.replacement_cost
    from film
    inner join inventory
    on film.film_id = inventory.film_id
    and film.title like '%Boat%' or film.description like '%Boat%'
    inner join friend
    on friend.inventory_id = inventory.inventory_id
    order by film.replacement_cost desc
    limit 1


with action_films as (
	select film.* 
	from film
	inner join film_category
	on film.film_id = film_category.film_id
	inner join category
	on film_category.category_id = category.category_id
	and category.name = 'Action'
)
select film.*
from film
inner join film_actor
on film.film_id = film_actor.film_id
inner join actor
on film_actor.actor_id = actor.actor_id
and actor.first_name = 'Joe' and actor.last_name = 'Swank'
inner join action_films
on film.film_id = action_films.film_id


insert into rental (rental_date, inventory_id, customer_id, staff_id, last_update) values
('now', 1, 602, 1, 'now'),
('now', 2, 602, 1, 'now'),
('now', 3, 602, 1, 'now')


with rented_films as (
	select rental.*
	from rental
	inner join customer
	on rental.customer_id = customer.customer_id
	and customer.first_name = 'alon'
	and customer.last_name = 'ganot'
)
update rental
set return_date = 'now'
from rented_films
where rental.rental_id = rented_films.rental_id