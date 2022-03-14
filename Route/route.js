
const express = require('express')

const router = express.Router()

const hayat  = require('../Conttrollers/authorController')

//const ashis = require('../Conttrollers/blogControler')


router.get("/test",(req,res)=>{

res.send("My first project api")

})

router.post("/author",hayat.createAuthors)

module.exports=router