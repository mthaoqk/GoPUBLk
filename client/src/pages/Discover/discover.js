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

  render() {
    return (

      <div>
        <Hero backgroundImage="http://www.aesp.biz/wp-content/uploads/2018/06/business-angel.jpg">
          <h1>GoPUBLk</h1>
        </Hero>
        <div className='container'>
          <div>
            <h2 className="color-a">Discover Projects</h2>
          </div>
          <div classNanme="form-group row">
            <div className="col-s-12">
              <div id="projList">
                <lu>
                  <h5><strong>ID #: 1</strong></h5>
                  <h5></h5>
                  <h3>Title: VR Body Suit</h3>
                  <p>Description: Body suit for the full VR experience</p>
                  <p>Body: Working with self-discovered technology to create a full body suit that works with any existing VR goggles</p>
                  <p>Author: Andrew</p>
                  <p>Financing: $20,000</p>
                </lu>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-s-12">
              <div id="projList">
                <lu>
                  <h5><strong>ID #: 2</strong></h5>
                  <h3>Title: Workout Computer</h3>
                  <h3></h3>
                  <p>Description: Computer to record all workouts by tracking body movement</p>
                  <p>Body: Create an app that tracks all body movements with watch and workout bands to accurately track all movements.</p>
                  <p>Author: Matt</p>
                  <p>Financing: $10,000</p>


                </lu>
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default Discover;