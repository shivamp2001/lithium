const Newpublish=require("../models/newpublish")


const creatnewpublish= async function(req,res){
    let body=req.body
    let publish= await Newpublish.create(body)
    res.send({publish})
}
module.exports.creatnewpublish=creatnewpublish