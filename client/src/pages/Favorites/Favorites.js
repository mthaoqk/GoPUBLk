
import React, { Component } from "react";
import Hero from "../../components/Hero";
// import "./Profile.css";
import ProfileNavBar from "../../components/ProfileNavBar/"
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class Favorites extends Component {

    render() {
        return (
            <div>
                <Hero backgroundImage="http://www.aesp.biz/wp-content/uploads/2018/06/business-angel.jpg">
                    <h1>GoPUBLk</h1>
                </Hero>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="profileJumb" className="jumbotron">
                                <h5>Favorites</h5>

                            </div>
                            <ProfileNavBar />

                        </div>
                    </div>
                </div>
            </div>





        )
    }
}


export default Favorites;
