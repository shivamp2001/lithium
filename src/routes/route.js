const express = require('express');
const router = express.Router();
const UserController=require("../controllers/usercontroller1")
const Middleware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",UserController.createUser)

router.post("/login",UserController.login)

router.get("/users/:userId",Middleware.authenticate,Middleware.authorise,UserController.fetchdata)

router.put("/users/:userId",Middleware.authenticate,Middleware.authorise,UserController.updateData)

router.delete("/users/:userId",Middleware.authenticate,Middleware.authorise,UserController.deleteData)


module.exports = router;