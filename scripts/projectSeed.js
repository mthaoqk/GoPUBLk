const mongoose = require("mongoose");
const Project = require("../models/Project");
const User = require("../models/User");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/gopublk"
);

const ProjectSeed = [
    {
     
      title: "VR Body Suit",
      description:"Body suit for the full VR experience",
      body: "Working with self-made technology to create a full body suit that works with any existing VR goggles",
      author: "Andrew",
      timestamp: new Date(Date.now()),
      financing: "20000",
    },
    {
      title: "Workout Computer",
      description:"Computer to record all workouts by tracking body movement",
      body: "Create an app that tracks all body movements with watch and workout bands to accurately track all movements",
      author: "Matt",
      timestamp: new Date(Date.now()),
      financing: "10000",
    },
  ];

   Project
  .remove({})
  .then(() => Project.collection.insertMany(ProjectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
