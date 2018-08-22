import React, { Component } from "react";
import Hero from "../../components/Hero";
import "./Profile.css";
import ProfileNavBar from "../../components/ProfileNavBar/"

class Profile extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
          <h1>GoPUBLk</h1>
        </Hero>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out.
                   Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide...
                   and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that
                    killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
        </p>

              </div>
              <ProfileNavBar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
