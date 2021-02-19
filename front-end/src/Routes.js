import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./components/Home";
import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList"
import User from "./components/User"
import PostList from "./components/PostList"
import Post from "./components/Post"
import ReviewList from "./components/ReviewList"
import Review from "./components/Review"
import BeerList from "./components/BeerList"
import Beer from "./components/Beer"
import BreweryList from "./components/BreweryList"
import Brewery from "./components/Brewery"

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
      <Route path="/users/:username" exact>
        <User />
      </Route>
      <Route path="/users/:username/posts" exact>
        <PostList />
      </Route>
      <Route path="/users/:username/posts/:id" exact>
        <Post />
      </Route>
      <Route path="/users/:username/reviews" exact>
        <ReviewList />
      </Route>
      <Route path="/users/:username/reviews/:id" exact>
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