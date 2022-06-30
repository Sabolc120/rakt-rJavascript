const food = require('../../Models/FoodModel')

const getRequest = async (req, res)=>{
    try{
        const id = req.params.id;
        const data = await food.findById(id)
        res.render("szerkesztesetel", {data})
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = getRequest;