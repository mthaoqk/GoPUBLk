import React, { Component } from "react";
import Hero from "../../components/Hero"
import API from "../../utils/API";
import "./discover.css";
import "../Search/Search.js";
import ListItem from "../../components/Listitems";


class Discover extends Component {
  state = {
    Title: "",
    tagList: "",
    Author: "",
    Description: "",
    projects: [],

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

  
  handleMoreSubmit=id =>
  {
    console.log("clicked"); 
    console.log(id);
    let projectId=id;
    //PROPS.HISTORY.PUSH()
    this.props.history.push("/project/"+ projectId)
    //window.location.replace("/project/"+ projectId);
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
                <h5>Discover</h5>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
                {
                  this.state.projects.map((projects) =>
                    <ListItem
                      title={projects.title}
                      description={projects.description}
                      financing={projects.financing}
                      body={projects.body}
                      favorite={projects.favorite}
                      key={projects._id}

                    />
                  )
                }
              </ul>
            </div>
          </div>


        </div>
      </div>

    )
  }
}

export default Discover;