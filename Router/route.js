const express = require('express');
const contentController = require('../controller/contentController');
const route = express.Router()

route.get('/get', (req, res) => {
    res.send("Data From GET")
}) 


route.post('/create', contentController.create );
route.get('/:urlCode', contentController.getContent );
 


route.all('/*', (request,response)=>{response.status(400).send("HTTP Method Wrong")})


module.exports = route 