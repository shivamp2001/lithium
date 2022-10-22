const bookMode=require("../model2/bookmodel")


const createBook= async function(req,res){
   let store =req.body
  let booksdata=await bookMode.create(store)
res.send({booksdata})
}
const getbook= async function(req,res){
    let allboks= await bookMode.find()
    res.send({allboks})
}
module.exports.createBook=createBook
module.exports.getbook=getbook