const mongoose=require('mongoose');

const bookandauthirs=new mongoose.Schema({
    // authors details
    author_id:{type:Number,require:true},
    author_name:String,
    age:Number,
    address:String,
      

    // book details
    name:String,
    author_id:{type:Number,require},
    price:Number,
    ratings:Number,


},{timestamps:true});


module.exports=mongoose.model( 'Bookdetails',bookandauthirs)