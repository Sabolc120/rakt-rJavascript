const getRequest = require('../Controllers/foodControllers/foodEditController')
const router = require('express').Router();

router.get("/:id", getRequest);

module.exports = router;