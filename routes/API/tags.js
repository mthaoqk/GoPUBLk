var mongoose = require('mongoose');
var Project = mongoose.model('Article');
var router = require('express').Router();

router.get('../client/src/pages/Search/Search.js', function(req,res,next){
    Project.find().distinct('tagList').then(function(tags){
        return res.json({tags: tags});
    }).catch(next);
});
module.exports = router;