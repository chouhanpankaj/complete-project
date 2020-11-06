create database jwtdemo03;

create table jwtdemo03.users(
   id int AUTO_INCREMENT,
   name varchar(100) NOT NULL,
   email varchar(100) NOT NULL UNIQUE,
   phone varchar(12) UNIQUE,
   address varchar(200),
   password varchar(100),
   verifystatus boolean default false,
   activestatus boolean default true,
   created_at timestamp default CURRENT_TIMESTAMP,	
   updated_at timestamp default CURRENT_TIMESTAMP,
   PRIMARY KEY(id)
);

create table jwtdemo03.category(
    id int AUTO_INCREMENT,
    category_name varchar(100) NOT NULL,    
    status  boolean default true,
   created_at timestamp default CURRENT_TIMESTAMP,	
   updated_at timestamp default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

create table jwtdemo03.product(
    id int AUTO_INCREMENT,
    category_id int,
    product_name varchar(100) NOT NULL,
    product_price float NOT NULL,
    product_desc varchar(200),
    product_image varchar(100),
   created_at timestamp default CURRENT_TIMESTAMP,	
   updated_at timestamp default CURRENT_TIMESTAMP,
    FOREIGN KEY(category_id) REFERENCES jwtdemo03.category(id),
    PRIMARY KEY(id)
);

create table jwtdemo03.order(
    id int AUTO_INCREMENT,
    users_id int,
    order_amount float NOT NULL,
    deliver_address varchar(200) NOT NULL,
    order_delivered boolean default false,
   created_at timestamp default CURRENT_TIMESTAMP,	
   updated_at timestamp default CURRENT_TIMESTAMP,
    FOREIGN KEY(users_id) REFERENCES jwtdemo03.users(id),
    PRIMARY KEY(id)
);

create table jwtdemo03.orderdetails(
    id int AUTO_INCREMENT,
    order_id int,
    product_id int,
   created_at timestamp default CURRENT_TIMESTAMP,	
   updated_at timestamp default CURRENT_TIMESTAMP,  
    FOREIGN KEY(order_id) REFERENCES jwtdemo03.order(id),
    FOREIGN KEY(product_id) REFERENCES jwtdemo03.product(id),
    PRIMARY KEY(id)
);
