require("dotenv").config()
const express = require('express');
const cors = require('cors');

const route = require('./Router/route');

require("./db/conn")

const app = express();


const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(route);



app.listen(PORT, () => {
    console.log(`Server Run on ${PORT} ...`)
});