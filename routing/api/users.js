const router = require("express").Router();
const userController = require("../../controllers/userController");
const User=require("../../models/User");

var passport=require("passport");
var LocalStrategy= require("passport-local").Strategy;


// Register User
router.post('/', function (req, res) {
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

router.get(userController.findAll);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


  router.get('/login', function (req, res) {
	res.redirect('login');
});

passport.use(new LocalStrategy(

	function (username, password, done) {
	
		checkUser.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Unknown User' });
			}

			checkUser.comparePassword(password, checkUser.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
	function (req, res) {
		res.redirect('/');
	});

router.get('/logout', function (req, res) {
	req.logout();

	res.redirect('/users/login');
});

module.exports = router;


