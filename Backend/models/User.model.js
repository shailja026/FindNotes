

const mongoose = require("mongoose");

const UserScheme = mongoose.Schema({
name : {
    type : 'string',
    required : true
},
email : {
    type : 'string',
    required : true
},
pass : {
    type : 'string',
    required : true
},

})

const UserModel = mongoose.model("user" , UserScheme);

module.exports = {
    UserModel
}