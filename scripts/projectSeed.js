const mongoose = require("mongoose");
const project = require("../models/Project");
const User = require("../models/User");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/gopublk"
);

const projectSeed = [
    {
        title: "abcbb4b",
        author: "Edison",
        description: "abc@afffbc.com",
        body: "12345",
        financing:
            "A number-one natio333333333333333333333333nal best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
        tagList: ["stringd"],
        timestamp: new Date(Date.now()),
        
        favorite: "",
        slug: "string"
    },
    {
        title: "abfff555fc",
        author: "Edison",
        description: "addddcom",
        body: "123fff4555",
        financing:
            "sdfsfdsdfest seller about a man who555555555555 wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
        tags: ["string7"],
        timestamp: new Date(Date.now()),
        favorite: "",
        slug: "string3"
    }];

   project
  .remove({})
  .then(() => project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
