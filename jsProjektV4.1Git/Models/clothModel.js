const mongoose = require('mongoose')

const clothSchema = mongoose.Schema({
    vonalkod:{
        type: String,
        required:true,
        unique:true
    },
    fajta: {
        type: String,
        required: true
    },
    leiras: {
        type: String,
        required: true
    },
    ar:{
        type: Number,
        required:true
    },
    meret: {
        type: String,
        required: true,
    },
    neme: {
        type: String,
        required: true,
    },
    mennyiseg:{
        type: Number,
        required:true
    },
    kepcim: {
        type:String,
        required:true,
        unique: true
    }
})

const clothesModel = mongoose.model('clothes', clothSchema)

module.exports = clothesModel;