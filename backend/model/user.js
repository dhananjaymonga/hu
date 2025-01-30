const mongoose =  require('mongoose')
const Schema = mongoose.Schema({
    name : {
        type : String,
    },
    email:{
        type : String , 
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required : true,
        minlength: 4
    }, 
})
module.exports = mongoose.model('user', Schema)