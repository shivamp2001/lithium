const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newpublisher=require("../controllers/newpublish")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/creatnewpublish",newpublisher.creatnewpublish)

router.post("/creatnewbook",bookController.createnewbook)

router.get("/fetchallbooks",bookController.fetchallbook)




module.exports = router;