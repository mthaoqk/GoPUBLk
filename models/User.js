const mongoose= require("mongoose");
var bcrypt= require("bcryptjs");


var UserSchema = new mongoose.Schema({
   // username: {type: String, lowercase: true, required: [true, "can't be blank."], unique: true, index: true},
    username: {type: String, lowercase: true, unique: true, index: true},
    //email: {type: String, lowercase: true, required: [true, "can't be blank."], unique: true, index: true},
    name: String,
    bio: String,
    image: String,
    // salt: String,
    // hash: String,
    password: String,
    favorites: [{type: mongoose.Schema.Types.ObjectId, ref:'Project'}],
}, {timestamps: true});

UserSchema.methods.favorite = function(id){
    if(this.favorites.indexOf(id) === -1){
        this.favorites.push(id);
    }
    return this.save();
};
UserSchema.methods.unfavorite = function(id){
    this.favorites.remove(id);
    return this.save();
};
UserSchema.methods.isFavorite = function(id){
    return this.favorites.some(function(favoriteId){
        return id.toString() === favoriteId.toString();
    });
};

UserSchema.methods.createUser = function(newUser, callback){
    
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            console.log("new Password :+++++ ",newUser.password)
	        newUser.save(callback);
	    });
	});
}

UserSchema.static("getUserByUsername",function(username, callback){
	var query = {username: username};
    this.findOne(query, callback);
})

UserSchema.static("getUserById", function(id, callback){
	this.findById(id,'-password',callback);
})


// UserSchema.static("getUserById", function(id, callback){
// 	this.findById(id, callback);
// })

UserSchema.static("comparePassword",function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	})
})

// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     	if(err) throw err;
//     	callback(null, isMatch);
// 	});
// }

const User=mongoose.model("User",UserSchema);

module.exports= User;