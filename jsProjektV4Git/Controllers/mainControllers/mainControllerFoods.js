const Food = require('../../Models/FoodModel')
const fs = require('fs');

const getUploadRequest = async(req, res) =>{
    res.render("feltoltes")
}

const getRequest = async (req, res) =>{
    try{
        const data = await Food.find();
        res.render('foods', {data})
    }
    catch(err){
        console.log(err.message);
    }
}
const deleteRequest = async(req, res) =>{
    const id = req.params.id;
    const kepcim = req.params.kepcim;
    try{
        await Food.findByIdAndDelete(id);
        fs.unlinkSync(`Public/kepek/${kepcim}`)
        res.render('torles')
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = {getRequest, deleteRequest, getUploadRequest};