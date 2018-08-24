import axios from "axios";

export default {


  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users/register", User);
  },

  checkUser: function(User) {
    return axios.post("/api/users/login", User);
  }

};
