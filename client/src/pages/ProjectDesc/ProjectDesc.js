import React, { Component } from "react";
import Hero from "../../components/Hero"
import API from "../../utils/API";
import "./ProjectDesc.css";
import "../Search/Search.js";

class ProjectDescription extends Component {
  state = {
    imageProject:"https://news.minitex.umn.edu/files/styles/full_content/public/ProjectManagement.jpg",
    projects: [],

  };
  
  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {    

    console.log(window.location.pathname);
    let path = window.location.pathname;
    var projectId= path.replace("/Projects/", "");
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

          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
                {
                  <div>
                    <li>
                      <b>title </b> : {this.state.projects.title} </li>   
                   <li> <b>description</b>  : {this.state.projects.description} </li>
                   <li> <b>financing</b>  : {this.state.projects.financing} </li>
                   <li><b>body</b> : {this.state.projects.body} </li>
                   <li> <b>favorite</b>  : {this.state.projects.favorite} </li>
                   <li> <b>id</b>  : {this.state.projects._id} </li>
                  <br>
                  </br>
                  <img className="ml-4 mb-4" src= {this.state.imageProject}></img>
                  </div>

                }
              </ul>
            </div>
          </div>


        </div>
      

    )
  }
}

export default ProjectDescription;