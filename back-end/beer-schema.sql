CREATE TABLE beers (
    id serial PRIMARY KEY, 
    brewery_id INT NOT NULL REFERENCES breweries ON DELETE CASCADE,
    name TEXT NOT NULL, 
    cat_id INT NOT NULL REFERENCES categories ON DELETE CASCADE,
    style_id INT NOT NULL REFERENCES styles ON DELETE CASCADE,
    abv FLOAT,
    ibu INT,
    srm INT,
    upc INT,
    filepath TEXT,
    descript TEXT,
    last_mod TIMESTAMP
);

CREATE TABLE breweries_geocode (
    id serial PRIMARY KEY, 
    brewery_id INT NOT NULL REFERENCES breweries ON DELETE CASCADE, 
    latitude FLOAT,
    longitude FLOAT,
    accuracy TEXT
);

CREATE TABLE breweries (
    id serial PRIMARY KEY, 
    name TEXT NOT NULL,
    address1 TEXT, 
    address2 TEXT, 
    city TEXT,
    state TEXT, 
    code TEXT,
    country TEXT,
    phone INT,
    website TEXT,
    filepath TEXT,
    descript TEXT,
    last_mod TIMESTAMP
);

CREATE TABLE categories (
    id serial PRIMARY KEY,
    cat_name TEXT,
    last_mod TIMESTAMP
);

CREATE TABLE styles (
    id serial PRIMARY,
    cat_id INT REFERENCES categories ON DELETE CASCADE,
    style_name TEXT,
    last_mod TIMESTAMP
);