import React, { Component } from "react";
import Hero from "../../components/Hero";
import API from "../../utils/API";
import "./Results.css";
import { ResultsList } from "../../components/List/ResultsList";




class Results extends Component {
  state = {
    Title: "",
    Author: "",
    Description: "",
    Body: "",
    financing: "",
    Projects: [],

  };
  componentDidMount() {
    this.loadProjects();
  }


  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ Projects: res.data })
      )
      .catch(err => console.log(err));
  }

  handleMoreSubmit = id => {
    console.log("clicked");
    console.log(id);
    let ProjectsId = id;
    this.props.history.push("/Projects/" + ProjectsId)
  }


  // renderProjectss = () => {
  //   return this.state.map(Projects => (
  //     <ResultsList
  //       _id={Projects._id}
  //       key={Projects._id}
  //       title={Projects.title}
  //       dateCreated={Projects.dateCreated}
  //       author={Projects.Author}
  //       // dateUpdated={Projects.update_date}
  //       tags={Projects.tagList}
  //       decription={Projects.decription}
  //       body={Projects.body}
  //       financing={Projects.financing}
  //       handleSaveButton={this.handleSaveButton}
  //     />
  //   ));
  // }

  // handleTopicChange = (event) => {
  //   this.setState({ topic: event.target.value });
  // }

  // handleDateCreatedChange = (event) => {
  //   this.setState({ dateCreated: event.target.value });
  // }

  // handleUpdateChange = (event) => {
  //   this.setState({ updateDate: event.target.value });
  // }
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
  //             console.log("Projects: ", this.state.Projects);
  //         });
  // }

  render() {
    return (

      <div>
        <Hero backgroundImage="http://www.aesp.biz/wp-content/uploads/2018/06/business-angel.jpg">
          <h1>GoPUBLk</h1>
        </Hero>
        <div className='container'>
          <div className="row">
            <div className="col-md-12">
              <div id="profileJumb" className="jumbotron">
                <h5>Search Results</h5>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-s-12">
              <ul className="list-group">
                {
                  this.state.Projects.map((Projects) => (
                    <ResultsList
                      id={Projects._id}
                      key={Projects._id}
                      title={Projects.title}
                      Author={Projects.author}
                      decription={Projects.decription}
                      body={Projects.body}
                      financing={Projects.financing}
                      slug={Projects.slug}
                      handleProjectInfo={this.handleMoreSubmit}
                    />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
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
//                     <div className="form-group row">
//                         <div className="col-s-12">
//                             <div>

//                                 <lu>
//                                     <h5>ID #: </h5>
//                                     <h5>1</h5>
//                                     <h3>Title:</h3>
//                                     <h3>VR Body Suit</h3>
//                                     <p>Description: </p>
//                                     <p>Body suit for the full VR experience</p>
//                                     <p>Body:</p>
//                                     <p>Working with self-discovered technology to create a full body suit that works with any existing VR goggles</p>
//                                     <p>Author:</p>
//                                     <p>Andrew</p>
//                                     <p>Financing:</p>
//                                     <p>$20,000</p>

//                                 </lu>
//                             </div>
//                         </div>
//                     </div>
//                     <div classNanme="form-group row">
//                         <div className="col-s-12">
//                             <lu>
//                                 <h5>ID #: </h5>
//                                 <h5>2</h5>
//                                 <h3>Title:</h3>
//                                 <h3>Workout Computer</h3>
//                                 <p>Description: </p>
//                                 <p>Computer to record all workouts by tracking body movement</p>
//                                 <p>Body:</p>
//                                 <p>Create an app that tracks all body movements with watch and workout bands to accurately track all movements</p>
//                                 <p>Author:</p>
//                                 <p>Matt</p>
//                                 <p>Financing:</p>
//                                 <p>$10,000</p>

//                             </lu>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//         );
//     }
// }

export default Results;