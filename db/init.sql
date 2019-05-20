drop table if exists comments;
drop table if exists boards;
drop table if exists posts;
drop table if exists inked_users;

create table inked_users (
    inked_user_id serial primary key,
    username varchar unique,
    password varchar
);

create table posts (
    post_id serial primary key,
    photo text,
    description text,
    likes integer
);

create table boards (
    board_id serial primary key,
    user_id integer references inked_users(inked_user_id),
    photo_id integer references posts(post_id),
    name varchar
);

create table comments (
    comment_id serial primary key,
    post_id int references posts(post_id),
    user_id int references inked_users(inked_user_id),
    comment text
);