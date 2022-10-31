
const mongoose=require('mongoose')
const Newpublishshema=new mongoose.Schema({
    publishname: String,
    headQuarter:String,
    
},{timeseries:true})
module.exports=mongoose.model('Newpublisher',Newpublishshema)