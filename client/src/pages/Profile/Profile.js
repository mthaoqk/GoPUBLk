import React from "react";
import Hero from "../../components/Hero";
import "./Profile.css";
import ProfileNavBar from "../../components/ProfileNavBar/"
import API from "../../utils/API";


class Profile extends Component {
  state = {
    user: "",
    projects: [],
    profile: ""

  };
  componentDidMount() {
    this.loadProfile();
    this.loadProjects();
  }

  loadProfile = () => {
    API.getProfile()
      .then(res =>
        this.setState({ user: "", profile: "" })
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
  render() {
    return (
      <div>
        <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
          <h1>GoPUBLk</h1>
        </Hero>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h5>Professional Profile</h5>

              </div>
              <ProfileNavBar />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div class="card">
                <img class="card-img-top" src={this.state.profile.image} alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p>
                    {this.state.profile.bio}
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
