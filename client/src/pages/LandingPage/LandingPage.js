import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Hero from "../../components/Hero";
import "./LandingPage.css";

// const LandingPage
class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginEmail: "",
      loginpass: "",

      signupEmail: "",
      signupPass: "",
      signupPassconfirm: ""
    };
  }

  // returns boolean if form fields for the signup are valid to submit
  validateLoginForm() {
    return this.state.loginEmail.length > 0 && this.state.loginpass.length > 0;
  }

  // returns boolean if form fields for the signup are valid to submit
  validateSignupForm() {

    // if all the fields have values in them
    if( this.state.signupEmail.length > 0 && this.state.signupPass.length > 0 && this.state.signupPassconfirm.length > 0){
      if(this.state.signupPass === this.state.signupPassconfirm){
        return true;
      }
    }


    // 
    return false;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleLoginSubmit = event => {
    console.log("Submit Login button pressed");
    event.preventDefault();

    // get salt for username attempt
    // $.post("/api/salt", this.state.loginEmail)
    //   .then(function (res) {


    //   });


  }


  handleSignupSubmit = event => {
    console.log("Submit signup button pressed");
    event.preventDefault();

    // get salt for username attempt
    // $.post("/api/salt", this.state.loginEmail)
    //   .then(function (res) {


    //   });


  }







  render() {
    return (
      <div>
        <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
          <h1>GoPUBLk</h1>
        </Hero>
        <div className="container">
          <div id="LandingJum" className="jumbotron">
            <div className="row">
              <div className="col-sm">
                <h1>Log-in</h1>
                <form onSubmit={this.handleLoginSubmit} >
                  <div className="form-group" >
                    <label htmlFor="loginEmail">Username / Email address</label>


                    {/* ============  Log-in: Username/email field ============ */}
                    <input
                      className="form-control"
                      id="loginEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"

                      value={this.state.loginEmail}
                      onChange={this.handleChange}

                    />

                  </div>
                  <div className="form-group">
                    <label htmlFor="loginpass">Password</label>
                    {/* ============  Log-in: Username/email field ============ */}
                    <input
                      type="password"
                      className="form-control"
                      id="loginpass"
                      placeholder="Password"

                      value={this.state.loginpass}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me?</label>
                  </div>
                  <div id="loginMessage"></div>

                  <button type="submit" id="loginSubmit" disabled={!this.validateLoginForm()} className="btn btn-primary">Submit</button>

                </form>
              </div>

              <div className="col-sm">
                <h1>Sign-up</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="signupEmail">Email address</label>
                    {/* ============  Signup: Username/email field ============ */}
                    <input type="email"
                      className="form-control"
                      id="signupEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={this.state.signupEmail}
                      onChange={this.handleChange}
                    />
                    <small className="form-text">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">


                   {/* ============  Signup: password field ============ */}
                    <label htmlFor="signupPass">Password</label>
                    <input type="password"
                      className="form-control"
                      id="signupPass"
                      placeholder="Password"

                      value={this.state.signupPass}
                      onChange={this.handleChange}

                    />
                  </div>
                  <div className="form-group">

                   {/* ============  Signup: password confirm field ============ */}
                    <label htmlFor="signupPassConfirm">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="signupPassconfirm"
                      placeholder="Password"

                      value={this.state.signupPassconfirm}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div id="signupMessage"></div>
                  <button type="submit" id="signupSubmit"  disabled={!this.validateSignupForm()} className="btn btn-primary">Submit</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default LandingPage;
