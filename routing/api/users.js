const router = require("express").Router();
const userController = require("../../controllers/userController");
const User=require("../../models/User");

var passport=require("passport");
var LocalStrategy= require("passport-local").Strategy;


// Register User
router.post('/register', function (req, res) {
    var newUser= new User ({

        username: req.body.username,
        email : req.body.email,
        password : req.body.password,
   
   })

   newUser.createUser(newUser, function (err, user) {
    if (err) throw err;
    console.log(newUser);
    });
    
	res.redirect("/profile");
})

router.get('/profile', function (req, res) {
	//console.log(req.user);
	res.json(req.user);
});

router.get(userController.findAll);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  router.route("/greet")
    .get( (req, res) => res.send(`Hello, ${req.user.username}`))


  router.get('/login', function (req, res) {
	//console.log(req.user);
	res.json(req.user);
});

passport.use(new LocalStrategy(

	function (username, password, done) {
			console.log("hellooo from REact",username,password);
			User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			console.log("user info", username,password);
			console.log("### user from db ###",user);
						
			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					console.log("we have a match");
					return done(null, user);
				} else {
					console.log("not match");
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

router.post('/login',
	passport.authenticate('local'),
	function (req, res) {
		res.json(req.user);
		//res.redirect("/");
	});

router.get('/logout', function (req, res) {
	req.logout();

	res.redirect('/users/login');
});

module.exports = router;


