import React from "react";
import Hero from "../../components/Hero";
import "./Results.css";
import "../Search/Search.js";


const Results = () => (
    <div>
        <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
            <h1>GoPUBLk</h1>
        </Hero>
        <div className='container'>
            <div>
                <h2 class="color-a">Search Results</h2>
            </div>
            <div class="form-group row">
                <div class="col-s-12">
                    <div>
                        <lu>
                            Title:<li name="title"></li>
                            Tags: <li name="tag"></li>
                            Author: <li name="author"></li>
                            Description: <li name="description"></li>
                        </lu>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Results;