const bookModel=require("../model2/bookmodel")

// create(insert)new database
const createBook= async function(req,res){
   let store =req.body
  let booksdata=await bookModel.create(store)
res.send({booksdata})
}
// fetch all the book data in database
const getbook= async function(req,res){
    let allboks= await   bookModel.find()
    res.send({allboks})
}
// list of onle bookname and tags arry
const booklist= async function(req,res){
  let books=await bookModel.find().select({bookName:1,tags:1,_id:0})
  res.send({books})
}
 
// given any input in year than send in responce that book
const getBooksInYear=async function(req,res){
  let postyear=req.query.publishyear
  let books= await bookModel.find({ year: { $eq: postyear } })
  res.send({books})
}
// given any input in bookname than send in responce that book
const getBooksname=async function(req,res){
  let bookname=req.body.bookname
  let books= await bookModel.find({ bookName: { $eq: bookname } })
  res.send({books})
}
module.exports.createBook=createBook
module.exports.getbook=getbook
module.exports.booklist=booklist
module.exports.getBooksInYear=getBooksInYear
module.exports.getBooksname=getBooksname
