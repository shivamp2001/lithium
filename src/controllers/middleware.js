const jwt = require("jsonwebtoken");




const middl1= function(req,res,next){
  let token=req.headers["x-auth-token"]
  if(!token)res.send({msg:"token is missing"})

  let validtoken = jwt.verify(token, "functionup");
  if (!validtoken) return res.send({ status: false, msg: "token is invalid" });
next()

}


module.exports.middl1=middl1
