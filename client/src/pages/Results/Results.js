import React, { Component } from "react";
import Hero from "../../components/Hero";
import API from "../../utils/API";
import "./Results.css";
import List from "../../components/List/List"
import { ListItem } from "../../components/List/ListItem";



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
    // handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Getting Projects");
    //     console.log("Topic: ", this.state.topic);
    //     console.log("Author: ", this.state.Author);
    //     console.log("Creation Date: ", this.state.dateCreated);
    //     // console.log("Update Date: ", this.state.updateDate);
    //     console.log("Tags: ", this.state.tagList);
    //     console.log("Description: ", this.state.description);
    //     console.log("Body: ", this.state.body);
    //     API.searchProjects(this.state.topic, this.state.author, this.state.tagList)
    //         .then((res) => {
    //             this.setState({ Projects: res.data.response.docs });
    //             console.log("Projects: ", this.state.projects);
    //         });
    // }

    //     render() {
    //         return (

    //             <div>
    //                 <Hero backgroundImage="http://www.aesp.biz/wp-content/uploads/2018/06/business-angel.jpg">
    //                     <h1>GoPUBLk</h1>
    //                 </Hero>
    //                 <div className='container'>
    //                     <div>
    //                         <h2 className="color-a">Search Results</h2>
    //                     </div>
    //                     <div classNanme="form-group row">
    //                         <div className="col-s-12">
    //                             <div>
    //                                 <ListItem
    //                                     renderProjects={this.renderProjects}
    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     }
    // }
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

                                <lu>
                                    <h5>ID #: </h5>
                                    <h5>1</h5>
                                    <h3>Title:</h3>
                                    <h3>VR Body Suit</h3>
                                    <p>Description: </p>
                                    <p>Body suit for the full VR experience</p>
                                    <p>Body:</p>
                                    <p>Working with self-discovered technology to create a full body suit that works with any existing VR goggles</p>
                                    <p>Author:</p>
                                    <p>Andrew</p>
                                    <p>Financing:</p>
                                    <p>$20,000</p>

                                </lu>
                            </div>
                        </div>
                    </div>
                    <div classNanme="form-group row">
                        <div className="col-s-12">
                            <lu>
                                <h5>ID #: </h5>
                                <h5>2</h5>
                                <h3>Title:</h3>
                                <h3>Workout Computer</h3>
                                <p>Description: </p>
                                <p>Computer to record all workouts by tracking body movement</p>
                                <p>Body:</p>
                                <p>Create an app that tracks all body movements with watch and workout bands to accurately track all movements</p>
                                <p>Author:</p>
                                <p>Matt</p>
                                <p>Financing:</p>
                                <p>$10,000</p>

                            </lu>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Results;