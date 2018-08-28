
import React, { Component } from "react";
import "./Logout.css";
import API from "../../utils/API";




class Logout extends Component {
  state = {
    userId: "",
    Message:"you need to sign-in or register first",
 
  };

componentDidMount() {
API
.logOutUser() 
.then(res=> res.send(200).end())
.catch(err=> console.log(err));


}



  render() {
    return (
      
        <div className="alert alert-success mt-3" role="alert">
            <h1 className="text-center">You are now logout...</h1>
        </div>
      
    );
  }
}


  export default Logout;