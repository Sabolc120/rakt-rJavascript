require('dotenv').config();
const express = require('express')
const app = express();
const createError = require('http-errors')
const ejs = require('ejs')
const csatlakozas = require('./Utils/dbConnection');
csatlakozas()

//Delete oldal létrehozása, bodrogi projektje átnézése hogy ugyanazok a furcsaságok ott is megvannak-e amik itt
//(Például hogy újra felakarja tölteni újrafrissítéskor...Ha onnan jöttél, megoldás lenne egy sikeres feltöltés oldal.)
//RU müveletek megépítése (Read, Update) azaz szerkesztés
//Projekt feltöltése githubra, done.

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/Public'));


app.use('/foodUpload', require('./Routes/foodUploadRoute'))
app.use('/clotheUpload', require('./Routes/clothUploadRoute'))
app.use('/feltoltes', require('./Routes/uploadRoute'))
app.use('/foods', require('./Routes/foodRoutes'))
app.use('/clothes', require('./Routes/clothRoutes'))
app.use('/szerkesztesetel', require('./Routes/editFoodsRoute'))
app.use('/szerkesztesruha', require('./Routes/editClothRoute'))
app.use('/refreshFood', require('./Routes/foodRefreshRoute'))
app.use('/refreshCloth', require('./Routes/clothRefreshRoute'))
app.use('/', require('./Routes/foodRoutes'))

app.listen(5000, () =>{
    console.log('A szerver fut az 5 ezres porton.');
})