const express = require("express")

const controllers = require("../Controllers/usersController")
const upload = require("../multerconfig/storageConfig")

const router = express.Router()

// routes

router.post("/user/register", upload.single("user_profile"), controllers.userpost)

router.get("/user/details", controllers.userget)

router.get("/user/:id", controllers.singleuserget)

router.put("/user/edit/:id", upload.single("user_profile"), controllers.useredit)


module.exports = router