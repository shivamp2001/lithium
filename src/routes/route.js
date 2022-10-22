const express = require('express');
const router = express.Router();


const booksController=require("../controller2/bookcontroller")




router.post('/creatBooks',booksController.createBook)
router.get('/getbook',booksController.getbook)
module.exports = router;