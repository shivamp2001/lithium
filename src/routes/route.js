const express = require('express');
const router = express.Router();
const userController= require("../controllers/userscontroller")
const middleware=require("../controllers/middleware")
// const middleware=require("../middleware/authentication")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createuser)

router.post("/login", userController.login)

router.get("/users/:userid",middleware.middl1,userController.getusers)

router.put("/updateusers/:userid",middleware.middl1,userController.userupdatedata)

router.delete("/delete/:userid",middleware.middl1,userController.deletedata)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

module.exports = router;