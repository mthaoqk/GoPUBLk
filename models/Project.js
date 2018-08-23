var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');
var ProjectSchema = new mongoose.Schema({
    slug: {type: String, lowercase: true, unique: true},
    title: String,
    description: String,
    financing: String,
    body: String,
    tagList:[{type: String}],
    favoritesCount: {type: Number, default: 0},
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
}, {timestamps: true});

ProjectSchema.plugin(uniqueValidator, {message: "is already taken."});

ProjectSchema.methods.slugify = function(){
    this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

ProjectSchema.pre('validate', function(next){
    if(!this.slug){
        this.slugify();
    }
    return next();
});

ProjectSchema.methods.toJSONFor = function(user){
    return {
        slug: this.slug,
        title: this.title,
        description: this.description,
        financing: this.financing,
        body: this.body,
        tagList: this.tagList,
        favoritesCount: this.favoritesCount,
        favorited: user ? user.isFavorite(this._id) : false,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        author: this.author.toProfileJSONFor(user)
    };
};
mongoose.model('Project', ProjectSchema);

ProjectSchema.methods.updateFavoriteCount = function(){
    var project = this;
    return User.count({favorites: {$in: [project._id]}}).then(function(count){
        project.favoritesCount = count;
        return project.save();
    });
};