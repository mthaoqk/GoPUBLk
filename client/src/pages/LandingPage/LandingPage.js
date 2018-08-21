import React from "react";
import Hero from "../../components/Hero";
import "./LandingPage.css";

const LandingPage = () => (
  <div>
    <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
      <h1>GoPUBLk</h1>
    </Hero>
    <div id="LandingJum" className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>Log-in</h1>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
            </form>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
          <div class="col-sm">
            <h1>Sign-up</h1>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
