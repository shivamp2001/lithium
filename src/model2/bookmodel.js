const mongoose=require('mongoose');

const bookschema=new mongoose.Schema({
    bookName:String,
    price:{
           indian:String,
           european :String
    },
    year:{type:Number,default:2021},
    tags:[String,Number,Boolean]
},{timestamps:true});


module.exports=mongoose.model( 'Book1',bookschema)