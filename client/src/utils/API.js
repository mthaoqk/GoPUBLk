import axios from "axios";

export default {
  getProfile: function() {
    return axios.get("/api/profiles");
  },



  getProjects: function() {
    return axios.get("/api/projects");
  },

  createProject: function(project) {
    return axios.post("api/projects",project);
  },
  
  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users/register", User);
  },

  checkUser:function(User) {
    return axios.post("/api/users/login",User);
  },

  getUserId : function() {
    return axios.get("api/users/info")
  }

};

