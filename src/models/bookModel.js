const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema( {
  
  
	bookname:String,
		author:{
          type:mongoose.Schema.Types.ObjectId,
          required:true,
          ref:"Newauthor"

        },
	    price:Number,
		ratings:Number,
		publisher:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Newpublisher"
        }

}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
