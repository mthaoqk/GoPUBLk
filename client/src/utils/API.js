import axios from "axios";

export default {
  updateProfile: function(id,user) {
    return axios.put("/api/users/"+id,user)
  },
  
  getProfile: function(userId) {
    return axios.get("/api/users/"+userId);
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

  getUnoProject: function(id) {
    return axios.get("/api/projects/"+id)
  },
  
  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users/register", User);
  },

  checkUser:function(User) {
    return axios.post("/api/users/login",User);
  },

  logOutUser:function() {
    return axios.get("api/users/logout");
  },


  getUserId : function() {
    return axios.get("api/users/info")
  }


};

