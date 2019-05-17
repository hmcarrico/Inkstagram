CREATE TABLE inked_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR
);