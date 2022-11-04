const userModel = require("../models/userModel");
const jwt=require("jsonwebtoken")

const createuser=async function(req,res){
    let body=req.body
    let usersdata=await userModel.create(body)
    res.send({data:usersdata})
}

const login=async function(req,res){
    let useremail=req.body.emailId
    let userpassword=req.body.password
    let user=await userModel.findOne({emailId:useremail,password:userpassword})
    if(!user)res.send({statut:false,msg:"plece enter valid email ans password"})
   let token=jwt.sign({
           batch:"lithium" 
   },"functionup");

   res.setHeader("x-auth-token", token);
   res.send({status:true,token:token})

}
 
const getusers=async function(req,res){
    let user=req.params.userid
    let userdata=await userModel.findById(user)
    if(!userdata)res.send({msg:"user data is not exist in db"})
    res.send({msg:userdata})
}

const userupdatedata=async function(req,res){
let user=req.params.userid
let forupdatedata=req.body
let update=await userModel.findById(user).select("_id")
if(!update)res.send({msg:"user data is not exist in db"})
let updateddata=await userModel.findById(user).updateOne(
    {update},{$set:forupdatedata},{$new:true})
res.send({updateddata})
}

const deletedata=async function(req,res){
let user=req.params.userid
let fordeletedata=req.body

if(!user)res.send({msg:"user data is not exist in db"})

let datadeleted= await userModel.findByIdAndUpdate({_id:user},{$set:fordeletedata},{$new:true})
res.send(datadeleted)

}

module.exports.createuser=createuser
module.exports.login=login
module.exports.getusers=getusers
module.exports.userupdatedata=userupdatedata
module.exports.deletedata=deletedata