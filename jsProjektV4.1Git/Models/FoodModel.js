const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    vonalkod:{
        type: String,
        required: true,
        unique: true
    },
    fajta:{
        type: String,
        required: true,
    },
    leiras: {
        type: String,
        required: true
    },
    ar: {
        type: Number,
        required: true
    },
    mennyisegKg: {
        type: Number,
        required:true
    },
    kepcim: {
        type: String,
        required: true,
        unique:true
    }
})
const foodModel = mongoose.model("food", foodSchema)

module.exports = foodModel;