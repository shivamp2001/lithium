const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken")

const createuser = async function (req, res) {
    try {
        let body = req.body
        let usersdata = await userModel.create(body)
        if (usersdata) {
            res.status(201).send({ data: usersdata })
        } else {
            res.status(400).send({ msg: "user data is madnatory" })
        }
    } catch (error) {
        res.status(500).send({ msg: "server side Error", error: error.message })
    }
}

const login = async function (req, res) {
    try {
        let useremail = req.body.emailId
        let userpassword = req.body.password
        let user = await userModel.findOne({ emailId: useremail, password: userpassword })
        if (user) {
            let token = jwt.sign({
                batch: "lithium"
            }, "functionup");

            res.setHeader("x-auth-token", token);
            res.send({ status: true, token: token })
        } else {
            res.status(400).send({ msg: "email and password in not correct" })
        }
    } catch (error) {
        res.status(500).send({ msg: "server side Error", error: error.message })
    }

}

const getusers = async function (req, res) {
    try {
        let user = req.params.userid
        let userdata = await userModel.findById(user)
        if (userdata) {
            res.statut(200).send({ msg: userdata })
        } else {
            res.status(400).send({ msg: "user is not exist" })
        }
    } catch (error) {
        res.status(500).send({ msg: "server side error", error: error.message })
    }
}

const userupdatedata = async function (req, res) {
    try {
        let user = req.params.userid
        let forupdatedata = req.body
        let update = await userModel.findById(user).select("_id")
        if (update) {
            let updateddata = await userModel.findById(user).updateOne(
                { update }, { $set: forupdatedata }, { $new: true })
            res.status(200).send({ updateddata })
        } else {
            res.status(400).send({ msg: "user is not exist" })
        }
    } catch (error) {
        res.status(500).send({ msg: "server side Error", error: error.message })
    }
}

const deletedata = async function (req, res) {
    try {
        let user = req.params.userid
        let fordeletedata = req.body
        if (user) {
            let datadeleted = await userModel.findByIdAndUpdate({ _id: user }, { $set: fordeletedata }, { $new: true })
            res.status(200).send(datadeleted)
        } else {
            res.statut(400).send({ msg: "user is not exist" })
        }
    } catch (error) {
        res.status(500).send({ msg: "server side Error", error: error.message })
    }
}

module.exports.createuser = createuser
module.exports.login = login
module.exports.getusers = getusers
module.exports.userupdatedata = userupdatedata
module.exports.deletedata = deletedata