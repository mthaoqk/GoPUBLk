import React, { Component } from "react";
import Hero from "../../components/Hero";
import { Input, FormBtn } from "../../components/Form";
// import $ from 'jquery';

import API from "../../utils/API";

class EditProfile extends Component {

  state = {
    
    bio: "",
    image: "",
    userId:"",
    name: "",
    loginEmail: "You need to login or signup first",

  };
  

  componentDidMount() {
    this.loadUserId();
  }

  loadUserId() {
     API
    .getUserId()
    .then(res=> { this.setState({
      loginEmail: res.data.username,
      userId : res.data._id,
      bio : res.data.bio,
      name: res.data.name,
      image: res.data.image,
     });   
        console.log(res.data);    
        console.log(this.state.loginEmail);
        console.log(this.state.userId);  
        
      })
    // .then(res=>this.setState({userId:res.data}))
    .catch(err=> console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Clicked update")
    if (this.state.bio) {
      API.updateProfile(
        this.state.userId,
        {
          bio: this.state.bio,
          image: this.state.image,
          name : this.state.name,       
        
        })      
      

      
        .then(res=> {
          console.log(res);
          this.props.history.push("/profile");
        })

        .catch(err => console.log(err));
        //window.location.replace("/profile");
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
                value={this.state.loginEmail}              
                name="login"
                placeholder="email for login"
              />
               <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Enter your Name"
              />
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



