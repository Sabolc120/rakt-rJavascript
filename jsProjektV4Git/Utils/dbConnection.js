const { connect } = require('http2');
const mongoose = require('mongoose')

const csatlakozas = () =>{
    const MONGO_URL = process.env.MONGO_URL;
    mongoose.connect(MONGO_URL)
    .then(() =>{
        console.log('Sikeres adatbázis csatlakozás.');
    })
    .catch((err) =>{
        console.log('Sikertelen adatbázis csatlakozás');
        console.log(err.message);
    })
}
module.exports = csatlakozas;