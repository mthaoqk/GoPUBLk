import React from "react";
import Hero from "../../components/Hero";
import "./Search.css";

class Search extends React.Component {
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
      <Hero backgroundImage="https://s8.postimg.cc/aqr93z6lx/test.jpg">
        <h1>GoPUBLk</h1>
      </Hero>
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for Projects:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
    
  )
  }
}
export default Search;