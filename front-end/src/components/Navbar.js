import { JsonWebTokenError } from "jsonwebtoken";
import React from "react";
import { Link } from "react-router-dom";
import { decode } from "jsonwebtoken";

function Navbar() {

  const { username } = decode(localStorage.getItem("token"))
  
    
  return (
    <nav className="navbar navbar-light bg-info">
      <Link to="/users" className="navbar-brand text-light">
        Home
      </Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item pr-3">
          <Link to="/beers" className="nav-link text-light">
            Beers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/breweries" className="nav-link text-light">
            Breweries
          </Link>
        </li>
        <li className="nav-item">
          {username ? <Link to={`/users/${username}`} className="nav-link text-light">Profile </Link> : <Link to="/login" className="nav-link text-light">Login </Link>}
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
