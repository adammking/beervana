import { LOG_OUT } from "./types";

//Send the reset all action to reset the states included in the store back to their initial values of empty objects
function logoutAll() {
  return { type: LOG_OUT }
}


export { logoutAll }