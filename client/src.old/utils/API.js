import axios from "axios";

export default {


  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users", User);
  }
};
