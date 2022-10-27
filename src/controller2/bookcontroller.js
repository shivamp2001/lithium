const bookModel=require("../model2/bookmodel")

// for creating a book data
const createBook= async function(req,res){
   let store =req.body
  let booksdata=await bookModel.create(store)
res.send({booksdata})
}
// for creating a authors data
const creatauthors= async function(req,res){
  let store =req.body
 let authordata=await bookModel.create(store)
res.send({authordata})
}
//[1] find the authors id 
const findId=async function(req,res){
  let findcbgtid=req.body.name
  let findId=await (await bookModel.find({author_name:{$eq:findcbgtid}}).select({author_id:1}))
  res.send({findId}) 
}

// [2]find author_id and book name
const chetanbhagatbooks =async function(req,res){
let chtanid=req.body.book
let findId=await bookModel.find({author_id:{$eq:chtanid}}).select({author_id:1,name:1})
res.send({findId}) 
}
//[3] update the book price using
const updatevalue=async function(req,res){

  let update=await bookModel.findOneAndUpdate(
    {name:"Two states"},
    {$set:{price:100}},
    {new:true}
  )
  res.send({update})
}
// [4] find range between price
const findbookcost=async function(req,res){
  let data=await  (await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1}))
  res.send(data)
}

module.exports.createBook=createBook
module.exports.creatauthors=creatauthors
module.exports.findId=findId
module.exports.chetanbhagatbooks=chetanbhagatbooks
module.exports.updatevalue=updatevalue
module.exports.findbookcost=findbookcost
