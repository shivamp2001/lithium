const express = require('express');
const router = express.Router();


const booksController=require("../controller2/bookcontroller")



router.post('/creatBooks',booksController.createBook) //insert new book data in db

router.post('/creatauthors',booksController.creatauthors) //insert new authors data in db

router.post('/findId',booksController.findId) //find the id 

router.post('/chetanbhagatbooks',booksController.chetanbhagatbooks)//find all book by given id

router.post('/updatevalue',booksController.updatevalue) //change (update)the value(price)

router.post('/findbookcost',booksController.findbookcost)//filter the range on a price
module.exports = router; 