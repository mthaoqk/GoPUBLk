import React, { Component } from "react";
import Hero from "../../components/Hero"
import API from "../../utils/API";
import "./ProjectDesc.css";
import "../Search/Search.js";

class ProjectDescription extends Component {
  state = {
    imageProject: "https://news.minitex.umn.edu/files/styles/full_content/public/ProjectManagement.jpg",
    projects: [],

  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {

    console.log(window.location.pathname);
    let path = window.location.pathname;
    var projectId = path.replace("/Projects/", "");
    console.log(projectId);

    API.getUnoProject(projectId)
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
                <h5>{this.state.projects.title}</h5>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-12">
              <div id="ProjectDescJum" className="jumbotron">
                <ul className="list-group">
                  {
                    <div>
                      <li> <b>Title </b> : {this.state.projects.title} </li>
                      <li> <b>Description</b>  : {this.state.projects.description} </li>
                      <li> <b>Summary </b> : {this.state.projects.body} </li>
                      <li> <b>Finance </b>  : {this.state.projects.financing} </li>
                      <li> <b>id</b>  : {this.state.projects._id} </li>
                      <br>
                      </br>
                      <img className="ml-4 mb-4" src={this.state.imageProject}></img>
                    </div>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ProjectDescription;