var router = require('express').Router();
var User= require("../models/user");

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const checkLogin = (req,res,next)=>{
	if (req.user) next();
	else {
		res.sendStatus(403);
		res.send("Please Log in");
	}
}
module.exports = function(passport) {

	router.post("/createUser", function(req,res){
		User.create(req.body)
		.then(function(dbUser){
			console.log(dbUser)
			res.json(dbUser)
		})
	}
)

	router.get('/login',function(req, res) {
		res.send(`
			<form method="post"> 
				<input name="username"/>
				<input name="password"/>
				<input type="submit">

			</form>

			`);
			
	});
	router.post('/login',
		passport.authenticate('local'), //this is the magic
	  	function(req, res) {
			  console.log(req);
		    // If this function gets called, authentication was successful.
		    // `req.user` contains the authenticated user.
			//res.sendFile()
			
		    res.json({success:(req.user? "Yes":"No"), user:req.user});
		}
	)


	//use this route to test the user
	router.get('/testuser',
		//passport.authenticate('local'),
		ensureLoggedIn(),
		  function(req, res) {
		  		console.log("getting test user");

			    res.json({success:(req.user? "Yes":"No"), user:req.user});
			    console.log("Done getting test user");

		  }
	);
	router.get("/testmiddleware", checkLogin,
		(req,res)=>res.send("You are logged in with user " + req.user.username)
	);

	router.get('/logout',
		

	  	function(req, res) { 
		  	const old_user=req.user;
		  	req.logout();

	    	res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
	});

	return router;

}

