const Food = require('../../Models/FoodModel');

const getRequest = (req, res, next) =>{
    res.render("foodUpload")
}
const postRequest = async (req, res, next) =>{
    const vonalkod = req.body.vonalkod;
    const fajta = req.body.fajta;
    const leiras = req.body.leiras;
    const ar = req.body.ar;
    const kepcim = req.file.originalname;
    const mennyisegKg = req.body.mennyisegKg;
    try{
        const newFood = new Food({vonalkod, fajta, leiras, ar, mennyisegKg, kepcim})
        await newFood.save();
        const data = await Food.find();
        res.render('foods', {data});
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = {getRequest, postRequest};