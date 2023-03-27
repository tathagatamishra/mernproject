const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    txt: String,
    urlCode: String,
    baseurl: String,
    newabc:String
    
}, {timestamps:true})

module.exports = mongoose.model('Content', contentSchema )
