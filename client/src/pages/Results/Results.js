import React, { Component } from "react";
import Hero from "../../components/Hero";
import API from "../../utils/API";
import "./Results.css";
import List from "../../components/List/List"



class Results extends Component {
    state = {
        Title: "",
        tagList: "",
        Author: "",
        description: "",
        body: "",
        dateCreated: "",
        financing: "",

    };
    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = () => {
        API.getProjects()
            .then(res =>
                this.setState({ projects: [] })
            )
            .catch(err => console.log(err));
    }
    renderProjects = () => {
        return this.state.projects.map(project => (
            <List
                _id={project._id}
                key={project._id}
                title={project.title}
                dateCreated={project.dateCreated}
                author={project.Author}
                // dateUpdated={project.update_date}
                tags={project.tagList}
                decription={project.decription}
                body={project.body}
                financing={project.financing}
                handleSaveButton={this.handleSaveButton}
            />
        ));
    }

    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    }

    handleDateCreatedChange = (event) => {
        this.setState({ dateCreated: event.target.value });
    }

    handleUpdateChange = (event) => {
        this.setState({ updateDate: event.target.value });
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Getting Projects");
        console.log("Topic: ", this.state.topic);
        console.log("Author: ", this.state.Author);
        console.log("Creation Date: ", this.state.dateCreated);
        // console.log("Update Date: ", this.state.updateDate);
        console.log("Tags: ", this.state.tagList);
        console.log("Description: ", this.state.description);
        console.log("Body: ", this.state.body);
        API.searchProjects(this.state.topic, this.state.author, this.state.tagList)
            .then((res) => {
                this.setState({ Projects: res.data.response.docs });
                console.log("Projects: ", this.state.projects);
            });
    }

    render() {
        return (

            <div>
                <Hero backgroundImage="http://www.aesp.biz/wp-content/uploads/2018/06/business-angel.jpg">
                    <h1>GoPUBLk</h1>
                </Hero>
                <div className='container'>
                    <div>
                        <h2 className="color-a">Search Results</h2>
                    </div>
                    <div classNanme="form-group row">
                        <div className="col-s-12">
                            <div>
                                <List
                                    // handleTopicChange={this.handleTopicChange}
                                    // handleDateCreatedChange={this.handleStartDateChange}
                                    // handleUpdateChange={this.handleUpdateChange}
                                    // handleFormSubmit={this.handleFormSubmit}
                                    renderProjects={this.renderProjects}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;