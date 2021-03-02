import React from "react";
import { Link } from "react-router-dom";
import { decode } from "jsonwebtoken";
import { useSelector } from "react-redux";
import "./NavBar.css"
function Navbar() {

const auth = useSelector(st => st.auth.authenticated)
const stateToken = useSelector(st => st.auth.token)

if (auth) {
const { username } = decode(stateToken)
const loggedIn = (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/users" className="navbar-brand text-light">
        Home
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/breweries" className="nav-link text-light">
            Breweries
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/beers" className="nav-link text-light">
            Beers
          </Link>
        </li>
        <li className="nav-item">
          {username ? <Link to={`/users/${username}`} className="nav-link text-light">Profile </Link> : <Link to="/login" className="nav-link text-light">Login </Link>}

        </li>
      </ul>
    </div>
  </div>
</nav> 
  );
  return loggedIn 
} else {
     const loggedOut = (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/login" className="navbar-brand">
          Beervana
        </Link>
      </div>
    </nav>
    )
    return loggedOut
  }
  

}

export default Navbar;
