var UserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, required: [true, "can't be blank."], unique: true, index: true},
    email: {type: String, lowercase: true, required: [true, "can't be blank."], unique: true, index: true},
    bio: String,
    image: String,
    salt: String,
    hash: String,
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
module.exports = User;