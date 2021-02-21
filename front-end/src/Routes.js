import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "./components/Login";
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
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <RegisterForm />
      </Route>
      <Route exact path="/users">
        <UserList />
      </Route>
      <Route exact path="/users/:username">
        <User />
      </Route>
      <Route exact path="/users/:username/posts">
        <PostList />
      </Route>
      <Route exact path="/users/:username/posts/:id">
        <Post />
      </Route>
      <Route exact path="/users/:username/reviews">
        <ReviewList />
      </Route>
      <Route exact path="/users/:username/reviews/:id">
        <Review />
      </Route>
      <Route exact path="/beers">
        <BeerList />
      </Route>
      <Route exact path="/beers/:id">
        <Beer />
      </Route>
      <Route exact path="/breweries">
        <BreweryList />
      </Route>
      <Route exact path="/breweries/:id">
        <Brewery />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;