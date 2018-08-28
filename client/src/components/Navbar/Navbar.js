import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg">
    <Link className="navbar-brand" to="/">
      <img id="logo" src="https://s8.postimg.cc/7f1q6np9x/Logo.png" alt="MyLogo" />
    </Link>
    <div>
      <ul       className="navbar-nav navbarRow" >

        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Sign-In
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/logout"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/logout" className="nav-link">
            Logout
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
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
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

        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>     
        
        <li
          className={
            window.location.pathname === "/contactus"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contactus" className="nav-link">
            Contact Us
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default Navbar;
