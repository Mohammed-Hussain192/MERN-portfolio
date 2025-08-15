const mongoose = require('mongoose')


const responeSchema =mongoose.Schema( {
    name:String,
    email:String,
    message:String

});

module.exports=mongoose.model("response",responeSchema)