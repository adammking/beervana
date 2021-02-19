import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
    const user = useSelector(st => st.user.username)
    const token = useSelector(st => st.token);

  return (
    <nav className="navbar navbar-light bg-info">
      <Link to="/login" className="navbar-brand text-light">
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
      </ul>
    </nav>
  );
}

export default Navbar;
