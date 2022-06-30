const cloth = require('../../Models/clothModel')

const getRequest = async (req, res)=>{
    try{
        const id = req.params.id;
        const data = await cloth.findById(id)
        res.render("szerkesztesruha", {data})
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = getRequest;