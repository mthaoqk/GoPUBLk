
import React, { Component } from "react";
import Hero from "../../components/Hero";
import "./Profile.css";
import ProfileNavBar from "../../components/ProfileNavBar/"
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class Profile extends Component {
  state = {
    username: "",
    projects: [],
    bio: "",
    image: "",

  };
  componentDidMount() {
    this.loadProfile();
    this.loadProjects();
  }

  loadProfile = () => {
  API.getProfile() 
    .then(res =>
        this.setState({ username: res.user.username, bio: res.user.bio, image:res.user.image, })
    )
      .catch(err => console.log(err));
  }
  loadProjects = () => {
    API.getUserProjects()
      .then(res =>
        this.setState({ projects: res.data })
      )
      .catch(err => console.log(err));
  }
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
                <h5>{this.state.username}'s Profile</h5>

              </div>
              <ProfileNavBar />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <img className="card-img-top" src={this.state.image}></img>
                <div className="card-body">
                  <h5 className="card-title">Bio</h5>
                  <p>
                    {this.state.bio}
                  </p>

                </div>
              </div>
            </div>
          </div>
          <h5>User's Projects</h5>
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
