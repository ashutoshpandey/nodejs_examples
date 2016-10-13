var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/mong_db');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    meta: {
        dateOfBirth: Date,
        website: String
    },
    created_at: Date,
    updated_at: Date
});

userSchema.methods.toString = function() {

    var str = this.name + " , " + this.email + " , " + this.meta.dateOfBirth;

    return str;
};

// on every save, set the date
userSchema.pre('save', function(next) {
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

var User = mongoose.model('User', userSchema);
module.exports = User;

