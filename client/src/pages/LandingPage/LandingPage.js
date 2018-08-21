import React from "react";
import Hero from "../../components/Hero";
import "./LandingPage.css";

const LandingPage = () => (
  <div>
    <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
      <h1>GoPUBLk</h1>
    </Hero>
    <div className="container">
      <div id="LandingJum" className="jumbotron">
        <div className="row">
          <div className="col-sm">
            <h1>Log-in</h1>
            <form>
              <div className="form-group">
                <label for="loginEmail">Username / Email address</label>
                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="loginpass">Password</label>
                <input type="password" className="form-control" id="loginpass" placeholder="Password" />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" for="rememberMe">Remember Me?</label>
              </div>
              <div id="loginMessage"></div>

              <button type="submit" id="loginSubmit" className="btn btn-primary">Submit</button>

            </form>
          </div>

          <div class="col-sm">
            <h1>Sign-up</h1>
            <form>
              <div class="form-group">
                <label for="signupEmail">Email address</label>
                <input type="email" className="form-control" id="signupEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="signupPass">Password</label>
                <input type="password" className="form-control" id="signupPass" placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="signupPassConfirm">Confirm Password</label>
                <input type="password" className="form-control" id="signupPassConfirm" placeholder="Password" />
              </div>
              <div id="signupMessage"></div>
              <button type="submit" id="signupSubmit" className="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>

    <script>
      {
        // insert the code for the page... maybe?
      }

    </script>



  </div>
);

export default LandingPage;
