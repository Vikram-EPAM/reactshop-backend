create table if not exists products(
	id uuid not null default uuid_generate_v4() primary key,
	title text not null,
	description text,
	price integer
);

create table if not exists stocks(
	product_id uuid references products(id),
	'count' integer
);

insert into products (title, description, price) values ('Product1', 'Product1 Description', 10);
insert into products (title, description, price) values ('Product2', 'Product2 Description', 12);
insert into products (title, description, price) values ('Product3', 'Product3 Description', 13);
insert into products (title, description, price) values ('Product4', 'Product4 Description', 14);
insert into products (title, description, price) values ('Product5', 'Product5 Description', 9);
insert into products (title, description, price) values ('Product6', 'Product6 Description', 20);
insert into products (title, description, price) values ('Product7', 'Product7 Description', 100);
insert into products (title, description, price) values ('Product8', 'Product8 Description', 30);
insert into products (title, description, price) values ('Product9', 'Product9 Description', 40);
insert into products (title, description, price) values ('Product10', 'Product10 Description', 10);


select * from products;

insert into stocks (product_id, "count") values ('0fd85585-b784-4c17-8c45-c18a1bfed652', 10);
insert into stocks (product_id, "count") values ('8ebf3b4f-9e08-4209-aefa-b1c569560643', 10);
insert into stocks (product_id, "count") values ('ca7d588a-88ae-4f49-8e2f-0eb8e8b623e6', 10);
insert into stocks (product_id, "count") values ('1cf9c267-0dd6-4918-83b4-e6168c81104d', 10);
insert into stocks (product_id, "count") values ('62b31941-a3f6-4caa-bc4d-20f863c191cb', 10);
insert into stocks (product_id, "count") values ('b7322beb-97b1-4f3e-b99b-a2cc1b6afbfa', 10);
insert into stocks (product_id, "count") values ('0f9b22dd-f398-4776-9b4a-4a569367ea14', 10);
insert into stocks (product_id, "count") values ('cb8cd122-4f1a-4f53-a8fd-7c1bd54f6945', 10);
insert into stocks (product_id, "count") values ('a6ea0584-82df-44b7-97cb-765ec210fcfe', 10);
insert into stocks (product_id, "count") values ('afa7c935-41b9-40fc-9a7f-1abe2283d60a', 10);

select * from stocks;

