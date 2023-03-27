const contentModel = require('../Model/contentModel');

const create = async function (request, response) {
    
    const data = request.body;
    data.urlCode = Math.random().toString(36).substr(2, 5);
    data.newabc = "new Data"
    data.baseurl = `/${data.urlCode}` 
    
    console.log(data)
    const FinalData = await contentModel.create(data)
    console.log(FinalData) 
    response.status(201).send({ "Status": "SuccessFully Created", "TextContent": FinalData })
} 

const getContent = async function (request, response) {
    
    const urlCode = request.params.urlCode

    const FinalData = await contentModel.findOne({urlCode: urlCode});
    response.status(200).send({"Status": "Get Data Successfully....", "Data": FinalData})
}





module.exports = { create, getContent } 

