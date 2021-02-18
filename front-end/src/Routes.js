import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./Home";
import RegisterForm from "./RegisterForm";
import ProductList from "./ProductList";

function Routes() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Home />
      </Route>
      <Route path="/register" exact>
        <RegisterForm />
      </Route>
      <Route path="/users" exact>
        <UserList />
      </Route>
      <Route path="/users/:usename" exact>
        <UserPofile />
      </Route>
      <Route path="/users/:usename/posts" exact>
        <PostList />
      </Route>
      <Route path="/users/:usename/posts/:id" exact>
        <Post />
      </Route>
      <Route path="/users/:usename/reviews" exact>
        <ReviewList />
      </Route>
      <Route path="/users/:usename/reviews/:id" exact>
        <Review />
      </Route>
      <Route path="/beers" exact>
        <BeerList />
      </Route>
      <Route path="/beers/:id" exact>
        <Beer />
      </Route>
      <Route path="/breweries" exact>
        <BreweryList />
      </Route>
      <Route path="/breweries/:id" exact>
        <Brewery />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;