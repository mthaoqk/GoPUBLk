import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavBar.css";

const ProfileNavBar = props => (
  <nav className="navbar navbar-expand-lg">
    <div>
      <ul className="navbar-nav navbarRow">

        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            My Projects
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            My Investments
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Favorite Projects
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            My Offers
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
           Offers
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default ProfileNavBar;
