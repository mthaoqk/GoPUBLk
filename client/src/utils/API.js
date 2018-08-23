import axios from "axios";

export default {
<<<<<<< HEAD
  getProfile: function() {
    return axios.get("../routes/api/profiles");
  },

  getProjects: function() {
    return axios.get("../routes/api/projects");
  },
  
  
=======


  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users", User);
  }
>>>>>>> master
};
