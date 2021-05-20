const mongoose =require('mongoose')

const book = mongoose.Schema({
    personId  :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'person',
    },
    name    : {type:String}
})

module.exports = mongoose.model("book", book);