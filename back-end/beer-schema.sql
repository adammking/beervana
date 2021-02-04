




CREATE TABLE breweries (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    address1 TEXT, 
    address2 TEXT, 
    city TEXT,
    state TEXT, 
    code TEXT,
    country TEXT,
    phone TEXT,
    website TEXT,
    filepath TEXT,
    descript TEXT,
    last_mod TIMESTAMP
);


CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    cat_name TEXT,
    last_mod TIMESTAMP
);

CREATE TABLE styles (
    id SERIAL PRIMARY KEY,
    cat_id INT REFERENCES categories ON DELETE CASCADE,
    style_name TEXT,
    last_mod TIMESTAMP
);

CREATE TABLE beers (
    id SERIAL PRIMARY KEY, 
    brewery_id INT NOT NULL REFERENCES breweries ON DELETE CASCADE,
    name TEXT NOT NULL, 
    cat_id INT REFERENCES categories ON DELETE CASCADE,
    style_id INT REFERENCES styles ON DELETE CASCADE,
    abv FLOAT,
    ibu TEXT,
    srm TEXT,
    upc TEXT,
    filepath TEXT,
    descript TEXT,
    last_mod TIMESTAMP
);