import React, { Component } from "react";
import Hero from "../../components/Hero";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Searching for: ' + this.state.value);
    window.location.replace("/Results");
    event.preventDefault();

  }

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
                <h5>Search for Projects:</h5>
                <div className="row">
                  <div className="col-md-12">
                    <form id="formSubmit" onSubmit={this.handleSubmit}>
                      <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                      </label>
                      <input type="submit" value="Submit" />

                    </form>
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
export default Search;