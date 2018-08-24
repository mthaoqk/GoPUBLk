
import React, { Component } from "react";
import Hero from "../../components/Hero";
// import "./Profile.css";
import ProfileNavBar from "../../components/ProfileNavBar/"
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class Offers extends Component {

    render() {
        return (
            <div>
                <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
                    <h1>GoPUBLk</h1>
                </Hero>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="profileJumb" className="jumbotron">
                                <h5>Offers</h5>

                            </div>
                            <ProfileNavBar />

                        </div>
                    </div>
                </div>
            </div>





        )
    }
}


export default Offers;
