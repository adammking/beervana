import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import UserList from "./components/UserList"
import UserHome from "./components/UserHome"
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
      <PrivateRoute exact path="/users">
        <UserList />
      </PrivateRoute>
      <PrivateRoute exact path="/users/:username">
        <UserHome />
      </PrivateRoute>
      <PrivateRoute exact path="/users/:username/posts">
        <PostList />
      </PrivateRoute>
      <PrivateRoute exact path="/users/:username/posts/:id">
        <Post />
      </PrivateRoute>
      <PrivateRoute exact path="/users/:username/reviews">
        <ReviewList />
      </PrivateRoute>
      <PrivateRoute exact path="/users/:username/reviews/:id">
        <Review />
      </PrivateRoute>
      <PrivateRoute exact path="/beers">
        <BeerList />
      </PrivateRoute>
      <PrivateRoute exact path="/beers/:id">
        <Beer />
      </PrivateRoute>
      <PrivateRoute exact path="/breweries">
        <BreweryList />
      </PrivateRoute>
      <PrivateRoute exact path="/breweries/:id">
        <Brewery />
      </PrivateRoute>
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;