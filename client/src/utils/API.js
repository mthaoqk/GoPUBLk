import axios from "axios";

export default {
  updateProfile: function(User) {
    return axios.put("/api/users/:id", User)
  },
  
  getProfile: function(User) {
    return axios.get("/api/users/:id", User);
  },

  getUserProjects: function(){
    return axios.get("/api/projects/author")
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
  }

};

