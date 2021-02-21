import auth from "./auth"
import beers from "./beers"
import brewery from "./brewery"
import user from "./user"
import follows from "./follows"
import likes from "./likes"
import posts from "./posts"
import reviews from "./reviews"
import tags from "./tags"

import { combineReducers } from "redux";

export default combineReducers({
  auth, 
  beers,
  brewery,
  user,
  follows,
  likes, 
  posts,
  reviews,
  tags
});