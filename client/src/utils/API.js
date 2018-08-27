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

  getUnoProject: function(id) {
    return axios.get("/api/projects/:id")
  },
  
  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users/register", User);
  },

  checkUser:function(User) {
    return axios.post("/api/users/login",User);
  }


};

