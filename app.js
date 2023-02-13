require("dotenv").config()
const express = require("express")
const cors = require("cors")

const router = require("./Routes/router")

require("./db/conn")

const app = express()


const PORT = process.env.PORT || 6010

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("./uploads"))
app.use(router)


app.listen(PORT, () => {
    console.log("server is running on ", PORT);
})