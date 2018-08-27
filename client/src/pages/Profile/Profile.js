
import React, { Component } from "react";
import Hero from "../../components/Hero";
import "./Profile.css";
import ProfileNavBar from "../../components/ProfileNavBar/"
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class Profile extends Component {
  state = {
    userName: "",
    projects: [],
    profile: "",
    userId: "",

  };
  componentDidMount() {
    this.loadUserId();
    //this.loadProfile();
    this.loadProjects();
  }

  loadUserId() {
    

     API
    .getUserId()
    .then(res=> { this.setState({
      userName: res.data.username,
      userId : res.data._id,
     });   
        console.log(res.data);    
        console.log(this.state.userName);
        console.log(this.state._id);  
        
      })
    // .then(res=>this.setState({userId:res.data}))
    .catch(err=> console.log(err));
  }

  loadProfile = () => {
    API.getProfile(this.userId)
      .then(res =>
        this.setState({ userName: "", profile: "" })
      )
      .catch(err => console.log(err));
  }
  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: [] })
      )
      .catch(err => console.log(err));
  }

  // returnUser(){
  //   if (this.state.userId)
  //   console.log("yes retrieve userid");
  //     return "test";

  // }


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
                <img class="card-img-top" src={this.state.profile.image}></img>
                <div class="card-body">
                  <h5 class="card-title">Bio</h5>
                  <p>
                    {this.state.profile.bio}
                  </p>

                </div>
              </div>
            </div>
          </div>
          <h5>{this.state.userName} Projects</h5>
          <hr></hr>
          <List>
            {this.state.projects.map(project => (
              <ListItem key={project._id}>
                <Link to={"/projects/" + project._id}>
                  <strong>
                    {project.title}
                  </strong>
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

    )
  }
}


export default Profile;
