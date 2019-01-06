const mongoose = require('mongoose');
const validator = require('validator')

const {Schema} = mongoose;

const userSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true,
        validate: [ validator.isEmail, 'invalid email' ]
    },
    password:{
        type:String,
        required:true
    }
});

const user = mongoose.model('User',userSchema);
module.exports = user;