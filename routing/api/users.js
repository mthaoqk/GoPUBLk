const router = require("express").Router();
const userController = require("../../controllers/userController");
const User=require("../../models/User");

var passport=require("passport");
var LocalStrategy= require("passport-local").Strategy;


// Register User
router.post('/register', function (req, res) {
	
	//console.log("info from React",req.body);
	var newUser= new User ({

        username: req.body.username,
        email : req.body.email,
        password : req.body.password,
   
   })

   User.getUserByUsername(newUser.username, function (err, user) {
	console.log("testing ",user);
	if (err) throw err;
	if (user) {
		res.statusMessage =`User ${newUser.username} already exists! try new one`;
    	res.status(401).end();
	}
	else {
		newUser.createUser(newUser, function (err, user) {
		if (err) throw err;
		console.log(newUser);
		});
		res.statusMessage =`User ${newUser.username} is registered`;
		res.status(201).end();
	}
   })	
})

// login user
router.post('/login',
	passport.authenticate('local',{failureFlash:true}),
	function (req, res) {
		res.json(req.user);		
	});

router.route("/info")
.get(  (req,res) => res.json(req.user) )
.post( (req,res) => res.json(req.user) )


router.get('/logout', function (req, res) {
	req.logout();
	req.flash("success_msg","you are logged out");
	res.redirect('/users/login');
});


router.get(userController.findAll);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  router.route("/profile")
	// .get( (req, res) => res.send(`Hello, ${req.user.username}`))
	.get( (req, res) => res.json(req.user))
	.put(userController.update)

  router.get('/login', function (req, res) {
	//console.log(req.user);
	res.json(req.user);
});


// Express MiddleWare that retrieve req.body.username and req.body.password
passport.use(new LocalStrategy(

	function (username, password, done) {

			User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				console.log("--- unknown user ---")
				return done(null, false, { message: 'Unknown User' });
			}

			console.log("user info", username,password);
			console.log("### user from db ###",user);
						
			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					console.log("--- correct password ---");
					return done(null, user);
				} else {
					console.log("---- invalid password ---");
					return done(null, false, { message: 'Invalid password' });
				}
			});
			
		});
	}));

passport.serializeUser(function (user, done) {
	console.log("serializatingg....",user);
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	
	User.getUserById(id, function (err, user) {
		console.log("deserialization....",user);
		done(err, user);
	});
});

module.exports = router;


