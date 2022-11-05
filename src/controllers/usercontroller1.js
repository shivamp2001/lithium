const UserModel=require("../models/userModel")
const jwt=require("jsonwebtoken")

const createUser=async (req,res)=>{
let details=req.body
let userData=await UserModel.create(details)
res.send({userData})
} 



const login=async (req,res)=>{
    const{userId,password}=req.body
    let useDtata=await UserModel.findOne({_id:userId,password:password})
    if(!useDtata)res.send({status:false,msg:"user Id and password is not correct"})

    let token=jwt.sign({
        userId:userId,
        password:password},"functionup");
    res.setHeader('x-auth-token',token)
    res.send({status:true,msg:"login succsessful",token})
}


const fetchdata=async (req,res)=>{
    let userId=req.params.userId
    let getdata=await UserModel.findById(userId)
    res.send({getdata})
}


const updateUser=async (req,res)=>{
    let userId=req.params.userId
    let forupDate=req.body
    let user=await UserModel.findById(userId).select("_id")
    let updateData=await UserModel.findOneAndUpdate({_id:user},{$set:forupDate},{$new:true})
    res.send({updateData})
}

const deletedata=async (req,res)=>{
    let userId=req.params.userId
    let fordelete=req.body
    let user=await UserModel.findById(userId).select("_id")
    let deleteData=await UserModel.findOneAndUpdate({_id:user},{$set:fordelete},{new:true})
    res.send({deleteData})
}

module.exports.createUser=createUser
module.exports.login=login
module.exports.fetchdata=fetchdata
module.exports.updateData=updateUser
module.exports.deleteData=deletedata