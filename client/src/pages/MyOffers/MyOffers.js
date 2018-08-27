
import React, { Component } from "react";
import Hero from "../../components/Hero";
import "./MyOffers.css";
import ProfileNavBar from "../../components/ProfileNavBar/"
// import { List, ListItem } from "../../components/List";
// import { Link } from "react-router-dom";
// import API from "../../utils/API";


class MyOffers extends Component {
 
  render() {
    return (
      <div>
        <Hero backgroundImage="https://s8.postimg.cc/m1z0cxyud/business_Angel.png">
          <h1>GoPUBLk</h1>
        </Hero>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="profileJumb" className="jumbotron">
                <h5>Professional Profile</h5>

              </div>
              <ProfileNavBar />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">My Offers</h5>
                  <p>

                  </p>

                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>






    )
  }
}


export default MyOffers;
