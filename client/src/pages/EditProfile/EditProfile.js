import React, { Component } from "react";
import Hero from "../../components/Hero";
import { Input, FormBtn } from "../../components/Form";
// import $ from 'jquery';

import API from "../../utils/API";

class EditProfile extends Component {

  state = {
    
    bio: "",
    image: "",


  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Click")
    if (this.state.bio) {
      API.updateProfile({
        bio: this.state.bio,
        image: this.state.image,
      })

        .catch(err => console.log(err));
        window.location.replace("/profile");
    }
  };


  render() {
    return (<div>
      <Hero backgroundImage="https://s8.postimg.cc/m1z0cxyud/business_Angel.png">
        <h1>GoPUBLk</h1>
      </Hero>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="CreateProjJumbotron" className="jumbotron">
              <h5 id="CProjectTitle">Create/Edit Profile</h5></div>
            <form>
              <Input
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Bio, think of it as your resume (required)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="link to your picture"
              />
              
          
              <FormBtn
                disabled={!(this.state.bio)}
                onClick={this.handleFormSubmit}
              >
            Update Profile
              </FormBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default EditProfile;



