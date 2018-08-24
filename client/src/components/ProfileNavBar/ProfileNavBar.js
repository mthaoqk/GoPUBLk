import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavBar.css";

const ProfileNavBar = props => (
  <nav className="navbar navbar-expand-lg">
    <div>
      <ul className="navbar-nav navbarRow">

        <li
          className={
            window.location.pathname === "/myprojects"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/myProjects" className="nav-link">
            My Projects
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/myInvestments"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/myInvestments" className="nav-link">
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
          <Link to="/favorites" className="nav-link">
            Favorite
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/myOffers"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/myOffers" className="nav-link">
            My Offers
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/Offers"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/Offers" className="nav-link">
           Offers
          </Link>
        </li>

      </ul>
    </div>
  </nav>
);

export default ProfileNavBar;
