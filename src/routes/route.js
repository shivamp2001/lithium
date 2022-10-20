const express = require('express');
const router = express.Router();
// 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
router.post('/players',function(req,res){
    let body=req.body
    let addplayer=players.find(x=>x.name===body.name)
    if(addplayer){
        return res.send({msg:"name is existing"})
    }else{
        players.push(body)
        return res.send({players})
    }
})
 








    // let name=req.body.name //receive name obj (key and value)send from user
    // let dob=req.body.dob   //receive dob 
    // let gender=req.body.gender //gender
    // let city=req.body.city  //city
    // let sports=req.body.sports //sports
    // players.push({name,dob,gender,city,sports}) //using NJSON obj method create key value pair
//        console.log({ data: players , status: true } )
//        res.send(  { data: players , status: true }  )//send response to user
// console.log({add})


























module.exports = router;