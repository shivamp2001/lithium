const mongoose=require('mongoose');

const bookschema=new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    publishYear:{
        type:Number,
        require:true
    }
},{timestamps:true});


module.exports=mongoose.model( 'Books',bookschema)