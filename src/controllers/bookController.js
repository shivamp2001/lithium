
const bookModel= require("../models/bookModel")


const createnewbook=async function(req,res){
    let body=req.body
   
    if(!body.author){
        return res.send("author id is required ")
    } else if(!body.publisher){
        return res.send("publish id is required")
    }      
    let newbook=await bookModel.create(body)
    res.send({newbook})
}
const fetchallbook=async function(req,res){
    let allbooks=await bookModel.find().populate("author").populate("publisher")
    res.send({allbooks})
}
module.exports.createnewbook=createnewbook
module.exports.fetchallbook=fetchallbook