import React, { Component} from "react";
import Hero from "../../components/Hero";
import $ from 'jquery';
import "./CreateProject.css";


class CreateProject extends Component {


  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleCreateProjcectSubmit = event => {
    console.log("Create project button pressed");
    event.preventDefault();

    let projectinfo = {
      
    }

    // get salt for username attempt
    $.post("/newproject", projectinfo)
      .then(function (res) {

        console.log(res.body);
      });


  }



  
  render() {
    return (<div>
      <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
        <h1>GoPUBLk</h1>
      </Hero>
  
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="CreateProj" className="jumbotron">
              <h1 id="CProjectTitle">Create a project</h1>
              <form  onSubmit={this.handleCreateProjcectSubmit}>
                <div className="form-group">
                  <label htmlFor="ProjectInput">Title</label>
                  <input type="text" className="form-control" id="ProjectTitle" placeholder="Title"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="MinFunds">Goal</label>
                  <input type="number" className="form-control" id="Funds" placeholder="1,000.00"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="Tags">Tags</label>
                  <input type="text" className="form-control" id="Tags" placeholder="Technology"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="DesText">Description</label>
                  <textarea type="text" className="form-control" id="Description" placeholder="Description"></textarea>
                </div>
                <button type="submit" id="ProjectSubmit" className="btn btn-primary">Submit</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default CreateProject;
