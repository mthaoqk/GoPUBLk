let passport      = require('passport');
let session       = require("express-session")({ secret: "ctiosckzhgkyntvitviaw4", resave: false, saveUninitialized: false  });

let User = require ('./models/user')

module.exports = function(expressApp) {
	//initialize your authentication strategies
  passport.use(require('./auth_strategies/github'))
  passport.use(require('./auth_strategies/local'))


  //===============BOILERPLATE


  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  expressApp.use(session);  

  //initialize Passport and let Express know about it
  expressApp.use(passport.initialize());
  // Set up sessions 
  expressApp.use(passport.session());


  //==============END BOILERPLATE

  //Initialize authentication specific routes. This needs to be changed to match your configs

  expressApp.use(
   require("./routes/github-authentication-routes")(passport)
   )
  expressApp.use(
    require("./routes/authentication-routes")(passport)
    )

  return passport;

}

//==================================================================================================
// Sessions and User Serialization/Deserialization
//==================================================================================================

/*
Entering a username and password is often tedious for users, 
especially if it is not a particularly imortant app for the user 
or something they plan to only visit on a personal computer (like Pinterest, Facebook, Amazon, etc). 

We could save the username and password in local storage or cookies and send them to the server with each request.

However, then inherently means we need to save user credentials on the client side for long periods of time. 
This is very unsecure. 

A better way is to set up "Sessions". 
Sessions are initiated once at login, and given a globally unique "Session ID". A Session ID is like a temporary 
key. When the key times out, the user will need to log in again. 
This key, ideally, should contain no information that could give an attacker information about a userid or password.

This Session ID is stored on the client with cookies, and on the server in memory. 
They are given a timeout, and when the timeout is reached, the Session ID is deleted off the server. 

During the time between a user's login and the timeout, we want their session to "persist". 
To do this, when a user makes a server request with a valid SessionID, we will first "deserialize" a user. 
Deserialization is the process of taking information out of persistent storage.  
After deserializing, we will have req.user filled in with the user's information. We can then process the request. 
After the request is completed and data sent back to the client, we need to make sure that any changes to the user
 get saved back to persistent storage. 
Serialization is process of putting information into persistent storage.

With Passport, you just need to create the functions for serializing and deserializing.  
Passport will handle the session ids and everything else for you.
*/


// serializeUser is called after every request to persist the data
//Since our user is a Sequelize Model, we can just save the model to serialize it.
//the data is now persisted to the database
const serializeUser = function(user, done) {
  console.log("User", user)
  const id = (user._id? user._id: user[0]._id) //might be differe
  console.log("serializing user:", id)
  
  done(null, id);//save the user's id in the cookie. This is how Passport wants you to do this. 
}

//  deserializeUser is called when resuming a session
//  it should get your user information from the database
const deserializeUser = function(savedId, done) {
    console.log("Deserializing user: ", savedId)
    /*
    In this case, the User model has the information about our user
    Remember that we saved the id to the cookie in serializeUser, so the savedId passed to us above is the id we need to search
    Since we are using MySQL, use Sequelize to get the user by id
    We just need to match the id column in the database to savedId
    */ 
    var query= {"_id":(savedId)};
   User.findOne(query, function (err, result) {
    console.log("GOt this from db: ", result)
    if (err) done(err,null,{"message":"catch error"});
    else if (!result)  done("Not found",false,{"message":"User " + savedId + " not found in database"});
    else {
      console.log("got user: ",result);
      done(null,result);
    }
   })
}



