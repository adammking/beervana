\c capstone2


CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);


CREATE TABLE posts (
    id serial PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    users_id INT REFERENCES users ON DELETE CASCADE
);

CREATE TABLE follows (
    users_being_followed_id INT REFERENCES users ON DELETE CASCADE,
    users_following_id INT REFERENCES users ON DELETE CASCADE
);

CREATE TABLE reviews (
    id serial PRIMARY KEY, 
    title TEXT NOT NULL, 
    body TEXT NOT NULL,
    beers_id INT REFERENCES beers ON DELETE CASCADE,
    users_id INT REFERENCES users ON DELETE CASCADE
);

CREATE TABLE likes (
    id serial PRIMARY KEY, 
    posts_id INT REFERENCES posts ON DELETE CASCADE,
    users_id INT REFERENCES users ON DELETE CASCADE
);

CREATE TABLE flavor_tags (
    id serial PRIMARY KEY, 
    type TEXT NOT NULL,
    beers_id INT REFERENCES beers ON DELETE CASCADE,
    users_id INT REFERENCES users ON DELETE CASCADE
);
