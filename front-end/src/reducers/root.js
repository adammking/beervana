import auth from "./auth"
import beers from "./beers"
import brewery from "./brewery"
import user from "./user"

import { combineReducers } from "redux";

export default combineReducers({
  auth, 
  beers,
  brewery,
  user
});