import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getProfile: function() {
    return axios.get("../routes/api/profiles");
  },

  getProjects: function() {
    return axios.get("../routes/api/projects");
  },
  
  
};
