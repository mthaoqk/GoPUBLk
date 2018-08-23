import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
<<<<<<< HEAD
=======

>>>>>>> e0f7b4dd9b5c2c8503a6453ab44105223a2dbad7
  getProfile: function() {
    return axios.get("../routes/api/profiles");
  },

  getProjects: function() {
    return axios.get("../routes/api/projects");
  },
<<<<<<< HEAD

=======
>>>>>>> e0f7b4dd9b5c2c8503a6453ab44105223a2dbad7


  createProject: function() {
    return axios.post("../routes/api/projects");
  },
  
  // register a user 
  saveUser: function(User) {
    return axios.post("/api/users", User);
  }

<<<<<<< HEAD
  // createProject: function(createProject){
  //   return axios.post()
  // }
=======
>>>>>>> e0f7b4dd9b5c2c8503a6453ab44105223a2dbad7
};

