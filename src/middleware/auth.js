const jwt=require("jsonwebtoken")
const authenticate = function(req, res, next) {
  let token=req.headers["x-auth-token"]
  if(!token) res.send({msg:"token is require"})
  
next() 
}


const authorise = function(req, res, next) {
 
    let token=req.headers["x-auth-token"]
    let decodetoken=jwt.verify(token,"functionup")
    if(!decodetoken)res.send({status:false,msg:"token is invalid"})
    
    let paramsuserId=req.params.userId
    let decodeduserId=decodetoken.userId
    if(paramsuserId!=decodeduserId)res.send({status:false,msg:"you dont have a authoraisation"})
    next()
}



module.exports.authenticate=authenticate
module.exports.authorise=authorise