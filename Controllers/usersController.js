const users = require("../models/usersSchema")
const moment = require("moment")

// register user
exports.userpost = async (req, res) => {

    try {
        // console.log(req.file);
        // console.log(req.body);

        const file = req.file.filename
        const { fname, lname, email, mobile, gender, location, status } = req.body

        if (!fname || !lname || !email || !mobile || !gender || !location || !file) {
            res.status(401).json("All inputs are required")
        }

        const peruser = await users.findOne({ email: email })
        if (peruser) {
            res.status(401).json("This Email is already in use")
        }
        else {
            const datecreated = moment(new Date()).format("DD-MM-YYYY")

            const userData = new users({
                fname, lname, email, mobile, gender, location, status, profile: file, datecreated
            })

            await userData.save()
            res.status(200).json(userData)
        }
    }
    catch (error) {
        res.status(500).json(error)
        console.log('error from user controller');
    }
}

// user get
exports.userget = async (req, res) => {
    try {
        const usersdata = await users.find()
        res.status(200).json(usersdata)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

// get single user
exports.singleuserget = async (req, res) => {
    const { id } = req.params

    try {
        const userdata = await users.findOne({ _id: id })
        res.status(200).json(userdata)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

// user edit 
exports.useredit = async (req, res) => {

    const { id } = req.params
    const { fname, lname, email, mobile, gender, location, status, user_profile } = req.body
    const file = req.file ? req.file.filename : user_profile

    const dateUpdated = moment(new Date()).format("DD-MM-YYYY")

    try {
        const updateuser = await users.findByIdAndUpdate({ _id: id }, {
            fname, lname, email, mobile, gender, location, status, profile: file, dateUpdated
        }, {
            new: true
        })

        await updateuser.save()
        res.status(200).json(updateuser)
    }
    catch (error) {
        res.status(500).json(error)
    }
}