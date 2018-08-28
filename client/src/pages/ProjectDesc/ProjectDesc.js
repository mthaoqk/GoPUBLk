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
                      <li> <b>Description</b>  : {this.state.projects.description} </li>
                      <li> <b>Summary </b> : {this.state.projects.body} </li>
                      <li> <b>Finance </b>  : {this.state.projects.financing} </li>
                      <li> <b>id</b>  : {this.state.projects._id} </li>
                      <br>
                      </br>
                      <img className="ml-4 mb-4" src={this.state.imageProject}></img>
                    <button className= "btn btn-primary">Leave a comment </button>
                    
                    <button type="button" className="btn btn-primary">
                      
                        <span className="sr-only">unread messages</span>
                        <span className="icon is-large has-text-danger"><i className="far fa-thumbs-up"></i></span>
                        Like <span className="badge badge-light">50</span>
                  </button>
                  
                  <button type="button" class="btn btn-danger">
                      
                        <span className="sr-only">unread messages</span>
                        <span className="icon is-large has-text-danger"><i className="far fa-thumbs-down"></i></span>
                        DisLike <span className="badge badge-light">4</span>
                </button>
                
                <button className="choices btn-lg"> <i className="far fa-hand-point-right"></i> add to favorite </button>
                <button className="offer btn-lg"> <i className="far fa-hand-point-right"></i> make an offer </button>
                
                

                    
                    
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