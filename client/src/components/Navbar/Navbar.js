import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand" to="/">
    goPUBLC
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "create"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="create" className="nav-link">
            Create
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "profile"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="profile" className="nav-link">
            Profile
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>
);

export default Navbar;
