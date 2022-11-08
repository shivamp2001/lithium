const jwt = require("jsonwebtoken");

const middl1 = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"]
    if (!token) res.status(401).send({ msg: "header is madnatory" })

    let validtoken = jwt.verify(token, "functionup");
    if (!validtoken) {
      res.status(401).send({ msg: "token is not valid" })
    }
    next()
  } catch (error) {
    res.status(500).send({ msg: "server side Error", error: error.message })
  }

}
module.exports.middl1 = middl1
