import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavBar.css";

const ProfileNavBar = props => (
  <nav className="navbar navbar-expand-lg">
    <div>
      <ul className="navbar-nav navbarRow">

        <li
          className={
            window.location.pathname === "/EditProfile"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/EditProfile" className="nav-link">
            Edit Profile
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/"
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
            window.location.pathname === "/offers"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/offers" className="nav-link">
           Offers
          </Link>
        </li>

        <li
          className={
            window.location.pathname === "/favorites"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/favorites" className="nav-link">
            Favorites
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

export default ProfileNavBar;
