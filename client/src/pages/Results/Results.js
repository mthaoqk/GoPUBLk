import React, { Component } from "react";
import Hero from "../../components/Hero";
import API from "../../utils/API";
import "./Results.css";
import "../Search/Search.js";

class Results extends Component {
    state = {
        Title: "",
        tagList: "",
        Author: "",
        Description: ""
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
                                <lu id="Projtext">
                                    ID:<li className="ID"></li>
                                    Title:<li className="title"></li>
                                    Tags: <li className="tag"></li>
                                    Author: <li className="author"></li>
                                    Description: <li className="description"></li>
                                </lu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;