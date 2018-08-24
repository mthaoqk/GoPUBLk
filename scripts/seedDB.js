const mongoose = require("mongoose");
const Project = require("../models/Project");


// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/gopublk"
);

const ProjectSeed = [
  {
    title: "abc",
    description: "abc@abc.com",
    timestamp: new Date(Date.now()),
    favorite: "rrr",
    slug : "deerrrr"
  },
  {
    title: "abfc",
    description: "abc@frabc.com",
    timestamp: new Date(Date.now()),
    favorite: "frfr",
    slug: "deedd"
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



 

