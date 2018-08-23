import axios from "axios";

export default {
  getProfile: function() {
    return axios.get("../routes/api/profiles");
  },

  getProjects: function() {
    return axios.get("../routes/api/projects");
  },



  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users", User);
  }

  // createProject: function(createProject){
  //   return axios.post()
  // }
};
