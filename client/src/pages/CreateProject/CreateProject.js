import React, { Component } from "react";
import Hero from "../../components/Hero";
import { Input, FormBtn } from "../../components/Form";
// import $ from 'jquery';
import "./CreateProject.css";
import API from "../../utils/API";

class CreateProject extends Component {

  state = {
    title: "",
    description: "",
    financing: "",
    body: "",
    tags: "",
    slug: "",


  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Click")
    if (this.state.title) {
      API.createProject({
        title: this.state.title,
        description: this.state.description,
        financing: this.state.financing,
        body: this.state.body,
        tags: this.state.tags,
        slug: this.state.slug,
      })

        .catch(err => console.log(err));
      window.location.replace("/profile");
    }
  };


  render() {
    return (<div>
      <Hero backgroundImage="https://s8.postimg.cc/m1z0cxyud/business_Angel.png">
        <h1>GoPUBLk</h1>
      </Hero>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="CreateProjJumbotron" className="jumbotron">
              <h5 id="CProjectTitle">Create</h5>
              <hr></hr>
              <p> Create a project.</p>
            </div>

            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Short Description of Business Plan"
              />
              <Input
                value={this.state.financing}
                onChange={this.handleInputChange}
                name="financing"
                placeholder="Financial Need/Goal"
              />
              <Input
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Insert Comprehensive Business Plan Here"
              />

              <Input
                value={this.state.tags}
                onChange={this.handleInputChange}
                name="tags"
                placeholder="categories and tags"
              />

              <FormBtn
                disabled={!(this.state.title && this.state.description && this.state.body && this.state.financing && this.state.tags)}
                onClick={this.handleFormSubmit}
              >
                Submit Project
              </FormBtn>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default CreateProject;



