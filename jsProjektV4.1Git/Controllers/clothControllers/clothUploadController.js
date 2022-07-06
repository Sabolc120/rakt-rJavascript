const Cloth = require('../../Models/clothModel');

const getRequest = (req, res, next) =>{
    res.render("clotheUpload")
}
const postRequest = async (req, res, next) =>{
    const vonalkod = req.body.vonalkod;
    const fajta = req.body.fajta;
    const leiras = req.body.leiras;
    const ar = req.body.ar;
    const meret = req.body.meret
    const neme = req.body.neme
    const mennyiseg = req.body.mennyiseg
    const kepcim = req.file.originalname;
    try{
        const newCloth = new Cloth({vonalkod, fajta, leiras, ar, meret, neme, mennyiseg, kepcim})
        await newCloth.save();
        const data = await Cloth.find();
        res.render('clothes', {data});
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = {getRequest, postRequest};