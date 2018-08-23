var mongoose = require('mongoose');
var Project = mongoose.model('Project');
var router = require('express').Router();

router.get('Project', function(req,res,next){
    Project.find().distinct('tagList').then(function(tags){
        return res.json({tags: tags});
    }).catch(next);
});
module.exports = router;