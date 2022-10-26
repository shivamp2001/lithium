const express = require('express');
const router = express.Router();


const booksController=require("../controller2/bookcontroller")



router.post('/creatBooks',booksController.createBook)
router.get('/getbook',booksController.getbook)
router.get('/booklist',booksController.booklist)
router.post('/getBooksInYear',booksController.getBooksInYear)
router.post('/getBooksname',booksController.getBooksname)
module.exports = router;