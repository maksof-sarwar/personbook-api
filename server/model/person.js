const mongoose =require('mongoose')

const person = mongoose.Schema({
    autoIndex: false,
    name : {type : String},
    phoneNo : {type : Number},

})

module.exports = mongoose.model("person", person);
