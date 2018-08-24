import React, { Component } from "react";

import API from "../../utils/API";
import "./tests.css";
import "../Search/Search.js";
import ListItem from "../../components/Listitems";


class Tests extends Component {
    state = {
        Title: "",
        tagList: "",
        Author: "",
        Description: "",
        projects:[],

    };
    componentDidMount() {
        this.loadProjects();        
    }

    loadProjects = () => {
        API.getProjects()
            .then(res =>
                this.setState({ projects: res.data })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
        //   <div>
        //         <h1> list of projects available: </h1>
        //   </div>
                <div className="card-body" id="projects-section">

                <ul className="list-group">
                  {
                    this.state.projects.map((projects) =>
                      <ListItem
                        title={projects.title}
                        description={projects.description} 
                        key={projects._id}
                        favorite={projects.favorite}
                        slug={projects.slug}
                        
                      />
                    )
                  }
                </ul>
  
              </div>
        )
      }
}

export default Tests;