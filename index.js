const express = require('express')
const router = require('./Route/route')

const app = express()

const bodyParser=require("body-parser")

const mongoose=require('mongoose')

app.listen(4000,()=>{

console.log("server is running on 4000")

})

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/skDB?retryWrites=true&w=majority",{useNewUrlParser:true}).then(()=>

console.log("MongoDb Connected")
)

//---Global--middleware
app.use("/",router)