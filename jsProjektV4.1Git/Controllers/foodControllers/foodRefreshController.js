const food = require('../../Models/FoodModel')

const fs = require('fs')

const getRequest = async (req, res) =>{
    try{
        const id = req.params.id;
        const data = await food.findById(id)
        res.render('refreshFood', {data})
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
        const mennyisegKg = req.body.mennyisegKg;
        await food.findByIdAndUpdate(id, {vonalkod, fajta, ar, mennyisegKg, leiras})
        const data = await food.findById(id)
        res.render("szerkesztesetel", {data})
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = {getRequest, postRequest}