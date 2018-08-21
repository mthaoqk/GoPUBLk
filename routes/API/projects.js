var mongoose = require('mongoose');
var router = require('express').Router();
var Project = mongoose.model('Project');
var User = mongoose.model('User');
var auth = require('../auth');

router.post('/', auth.required, function(req,res,next){
    User.findById(req.payload.id).then(function(user){
        if(!user){return res.sendStatus(401);}
        var Project = new Project(req.body.Project);
        Project.author = user;
        return Project.save().then(function(){
            return res.json({Project: Project.toJSONFor(user)})
        });
    }).catch(next);
});

router.param('Project', function(req,res,next,slug){
    Project.findOne({slug: slug})
        .populate('author')
        //author if we title author as the creator or could be switched to creator...? for all author titles
        .then(function(Project){
            if(!Project){
                return res.sendStatus(404);
            }
            req.Project = Project;
            return next();
        }).catch(next);
});

router.get('/:Project', auth.optional, function(req,res,next){ 
    //project or project by ID.....? this for all /:Project
    Promise.all([
        req.payload ? User.findById(req.payload.id) : null,
        req.Project.populate('author').execPopulate()
    ]).then(function(results){
        var user = results[0];
        return res.json({Project: req.Project.toJSONFor(user)});
    }).catch(next);
});

router.put('/:Project', auth.required, function(req,res,next){
    User.findById(req.payload.id).then(function(user){
        if(req.Project.author._id.toString() === req.payload.id.toString()){
            if(typeof req.body.Project.title !== 'undefined'){
                req.Project.title = req.body.Project.title;
            }
            if(typeof req.body.Project.description !== 'undefined'){
                req.Project.description = req.body.Project.description;
            }
            if(typeof req.body.Project.body !== 'undefined'){
                req.Project.body = req.body.Project.body;
            }
            return req.Project.save().then(function(){
                return res.json({Project: req.Project.toJSONFor(user)});
            });
        } else {
            return res.sendStatus(403);
        }
    }).catch(next);
});

router.delete('/:Project', auth.required, function(req,res,next){
    User.findById(req.payload.id).then(function(user){
        if(req.Project.author._id.toString() === req.payload.id.toString()){
            req.Project.remove().then(function(){
                return res.sendStatus(204);
            });
        } else {
            return res.sendStatus(403);
        }
    }).catch(next);
});

module.exports = router;

