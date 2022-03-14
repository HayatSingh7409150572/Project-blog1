const mongoose= require('mongoose')

const newAuthor = new mongoose.Schema({

   firstName: {
        type : String,
        required: true
    },
    LastName:{
        type : String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum : ["Mr","Mrs","Miss"]
    },
    email: {
      type : String,
      required : true,
      unique : true
    },
    password: {
     type : String,
     required : true
    },
       },
   
     { timestamps: true });



module.exports=mongoose.model("Author",newAuthor)