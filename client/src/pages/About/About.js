import React from "react";
import Hero from "../../components/Hero";
import "./About.css";

const About = () => (
  <div>
    <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
      <h1>GoPUBLk</h1>
    </Hero>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be?
              He's the exact opposite of the hero. And most times they're friends, like you and me!
              I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.
              </p>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
