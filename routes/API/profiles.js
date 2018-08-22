var mongoose = require('mongoose');
var router = require('express').Router();
// var Profile = mongoose.model('Profile');
var User = mongoose.model('User');
var auth = require('../auth');

router.post('/', auth.required, function(req,res,next){
    User.findById(req.payload.id).then(function(user){
        if(!user){return res.sendStatus(401);}
        var Profile = new Profile(req.body.Profile);
        Profile.author = user;
        return Profile.save().then(function(){
            return res.json({Profile: Profile.toJSONFor(user)})
        });
    }).catch(next);
});

router.param('Profile', function(req,res,next,slug){
    Profile.findOne({slug: slug})
        .populate('author')
        //author if we title author as the creator or could be switched to creator...? for all author titles
        .then(function(Profile){
            if(!Profile){
                return res.sendStatus(404);
            }
            req.Profile = Profile;
            return next();
        }).catch(next);
});

router.get('/:Profile', auth.optional, function(req,res,next){ 
    //Profile or Profile by ID.....? this for all /:Profile
    Promise.all([
        req.payload ? User.findById(req.payload.id) : null,
        req.Profile.populate('author').execPopulate()
    ]).then(function(results){
        var user = results[0];
        return res.json({Profile: req.Profile.toJSONFor(user)});
    }).catch(next);
});

router.delete('/:Profile', auth.required, function(req,res,next){
    User.findById(req.payload.id).then(function(user){
        if(req.Profile.author._id.toString() === req.payload.id.toString()){
            req.Profile.remove().then(function(){
                return res.sendStatus(204);
            });
        } else {
            return res.sendStatus(403);
        }
    }).catch(next);
});

module.exports = router;