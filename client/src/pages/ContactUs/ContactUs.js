
import React, { Component } from "react";
import Hero from "../../components/Hero";
import "./ContactUs.css";
// import { List, ListItem } from "../../components/List";
// import { Link } from "react-router-dom";
// import API from "../../utils/API";


class ContactUs extends Component {

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
                                <h5>Contact us</h5>
                                <hr></hr>
                                Find out more about us.
                            </div>
                        </div>
                    </div>


                    <div id="contactJum" className="jumbotron">
                        <div className="row">

                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Andrew Vickerman</h5>
                                        <p class="card-text">Full stack Dev.</p>
                                        <a href="https://github.com/Avickerman" className="btn btn-primary" id="linkProj" target="_blank">GitHub</a>
                                        <a href="http://linkedin.com/in/andrew-vickerman-167393a4/" className="btn btn-primary" id="linkProj" target="_blank">LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Brian Richardson</h5>
                                        <p class="card-text">Full stack Dev.</p>
                                        <a href="https://github.com/richa863" className="btn btn-primary" id="linkProj" target="_blank">GitHub</a>
                                        <a href="https://www.linkedin.com/in/brian-richardson-26b74190/" className="btn btn-primary" id="linkProj" target="_blank">LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Edison Yang</h5>
                                        <p class="card-text">Full stack Dev.</p>
                                        <a href="https://github.com/EYang527/" className="btn btn-primary" id="linkProj" target="_blank">GitHub</a>
                                        <a href="https://www.linkedin.com/in/edison-yang-85bb85164/" className="btn btn-primary" id="linkProj" target="_blank">LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Nicholas Logan</h5>
                                        <p class="card-text">Full stack Dev.</p>
                                        <a href="https://github.com/nicholaslogan255" className="btn btn-primary" id="linkProj" target="_blank">GitHub</a>
                                        <a href="#" className="btn btn-primary" id="linkProj" target="_blank">LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div class="card">
                                    <img class="card-img-top" src="https://s8.postimg.cc/nxok2tgnp/Meng.jpg"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Meng Thao</h5>
                                        <p class="card-text">As tech is always evolving and I am going to always be a student at life, I truly believe I can bond the two to work together.</p>
                                        <a href="https://github.com/mthaoqk" className="btn btn-primary" id="linkProj" target="_blank">GitHub</a>
                                        <a href="https://www.linkedin.com/in/meng-thao-41b332104/" className="btn btn-primary" id="linkProj" target="_blank">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>






        )
    }
}


export default ContactUs;
