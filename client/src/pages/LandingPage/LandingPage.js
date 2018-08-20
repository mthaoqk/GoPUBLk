import React from "react";
import Hero from "../../components/Hero";
import "./LandingPage.css";

const LandingPage = () => (
  <div>
    <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
      <h1>GoPUBLk</h1>
    </Hero>
   
    <div className="container" id="LandingCon">
      <div className="row">
      <div className="col-md-12">
        <div className="jumbotron" id="LandingJum">
          <form>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <input type="password" class="form-control" id="passWord" placeholder="Enter password"></input>
            <a class="forgottonPass" href="#" target="_blank">Forgot Password?</a>
            <br></br>
            <button type="submit" class="btn btn-primary">Sign In</button>
            <button type="submit" class="btn btn-primary">Create Account</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
