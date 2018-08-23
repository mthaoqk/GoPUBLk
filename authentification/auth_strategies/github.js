let Strategy = require('passport-github').Strategy;
let User = require('../models/user');

//A strategy is the way we are authenticating.
//This file sets up the github strategy. 
//github uses oath2 to authenticate, so most other 3rd party auths (facebook, google, etc) will be similar


console.log("GitHub app Client ID: ",'a1110a13e862fb424209'); //test that we got our env setup right

const strategy = new Strategy({
    clientID: 'a1110a13e862fb424209',
    clientSecret: '4f4a457790f528ca40d8eb621f7fb4cfaef8c7f7',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Github profile is supplied as the user
    // record.  In a production-quality application, the Github profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.

    console.log("Successfully logged in: ", profile);
    

    User.findOrCreate({ social_id:profile.id }, {'username':profile.id,'password':'Oauth','email':'Github-'+profile.id})
    .then((doc) => {
       /**
        * doc.created = true
        * doc.result = new document
        **/
       console.log("********** inside findCReate*********** ",doc);
       return cb(null, doc.result);
    })
   // .catch(done);

    // User.findOrCreate({'social_id': profile.id,'username':profile.username,'password':'Oauth','email':'Github'}, function(err, user) {
    //   // created will be true here
    //   console.log('A new social Id was inserted', user.social_id);
    //   return cb(null, profile);

    //   User.findOrCreate({}, function(err, user) {
    //     // created will be false here
    //     console.log('not inserted', user.social_id);
    //     return cb(null, profile);
    //   })
    //   });
  
})


module.exports = strategy;







