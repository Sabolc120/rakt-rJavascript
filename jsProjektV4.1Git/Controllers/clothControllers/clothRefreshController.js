const cloth = require('../../Models/clothModel')

const fs = require('fs')

const getRequest = async (req, res) =>{
    try{
        const id = req.params.id;
        const data = await cloth.findById(id)
        res.render('refreshCloth', {data})
    }
    catch(error){
        console.log(error.message);
    }
}
const postRequest = async (req, res) =>{
    try{
        const id = req.body.id;
        const vonalkod = req.body.vonalkod
        const fajta = req.body.fajta;
        const leiras = req.body.leiras
        const ar = req.body.ar;
        const meret = req.body.meret
        const neme = req.body.neme
        const mennyiseg = req.body.mennyiseg
        await cloth.findByIdAndUpdate(id, {vonalkod, fajta, ar, meret, neme, mennyiseg, leiras})
        const data = await cloth.findById(id)
        res.render("szerkesztesruha", {data})
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = {getRequest, postRequest}