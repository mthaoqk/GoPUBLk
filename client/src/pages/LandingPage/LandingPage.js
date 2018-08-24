import React, { Component } from "react";
import $ from 'jquery';
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Hero from "../../components/Hero";
import "./LandingPage.css";
import API from "../../utils/API";

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
    if (this.state.signupEmail.length > 0 && this.state.signupPass.length > 0 && this.state.signupPassconfirm.length > 0) {
      if (this.state.signupPass === this.state.signupPassconfirm) {

        $("#signupMessage").html(""); // clear sign-up message
        return true;
      }
      else{
        $("#signupMessage").html("<p>Passwords do not match</p>"); // show user error message
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

    let loginInfo = {
      username: this.state.signupEmail,
      pass: this.state.pass
    }

    // get salt for username attempt
    $.post("/login", loginInfo)
      .then(function (res) {

        console.log(res.body);
      });


  }


  handleSignupSubmit = event => {
    console.log("Submit signup button pressed");
    event.preventDefault();

    // attempt to add new user to the database 
    // if username is unique, server will add to database
    // otherwise, show error to user
    let newUser = {
      username: this.state.signupEmail,
      email : "null@nul.com",
      pass: this.state.pass
    }

    
      API.saveUser(newUser)
        .then(res =>
          console.log(res)
        )
        .catch(err => console.log(err));
    
    
    // $.post("/api/users", newUser)
    //   .then(function (res) {
    //     console.log(res);

    //     if (res === "true") {
    //       alert("User created!");
    //       window.location.replace("/profile");
    //     }
    //     else {
         
    //       $(`#signupMessage`).html("Username already taken!");
    //     }


      // });

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
                <form onSubmit={this.handleSignupSubmit} >
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
                    <small className="form-text ">We'll never share your email with anyone else.</small>
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
                  <button type="submit" id="signupSubmit" disabled={!this.validateSignupForm()} className="btn btn-primary">Submit</button>
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
