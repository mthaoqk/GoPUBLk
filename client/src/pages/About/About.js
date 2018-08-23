import React, { Component } from "react";
import Hero from "../../components/Hero";
// import "./About.css";
import pic1 from "./entrepreneur.jpg";
import pic2 from "./angelInvestor.jpg";

class About extends Component {




  
  render() {
    return (
      <div>
        <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
          <h1>GoPUBLk</h1>
        </Hero>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1>The Mission of GoPUBLk</h1>
                <p>Connecting Entrepreneurs and Angel Investors. Fostering Relationships, Effecting Opportunity.
                <hr></hr>
                At GoPUBLk we are commited to making your business happen. By providing a platform for up-and-coming entrepreneurs to showcase their business plan, we hope to increase the rate of funding of startups around the country. A good fit between business and investor is key to success. We at GoPUBLk hope our depth of resources can provide a "match made in heaven."
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div class="card"
                  // style="width: 18rem;"
                  >
                    <img class="card-img-top" src={pic1} alt="En"></img>
                    <div class="card-body">
                      <h5 class="card-title">Benefits For Entrepreneurs</h5>
                      <ul>
                        <li>High exposure</li>
                        <li>Diverse investor backgrounds</li>
                        <li>Mentorship</li>
                        <li>Low Barrier to Entry</li>
                      </ul>
                      <a href="/create" class="btn btn-primary">Submit Your Project</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="card"
                  // style="width: 18rem;"
                  >
                    <img class="card-img-top" src={pic2} alt="Card image cap"></img>
                    <div class="card-body">
                      <h5 class="card-title">Benefits For Investors</h5>
                      <ul>
                        <li>Broad range of industries</li>
                        <li>Highly detailed business plans</li>
                        <li>Ease of use</li>
                        <li>Low barrier to entry</li>
                      </ul>
                      <a href="/search" class="btn btn-primary">Browse Projects</a>
                    </div>
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


export default About;
