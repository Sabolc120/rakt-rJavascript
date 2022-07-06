const getRequest = require('../Controllers/clothControllers/clothEditController')
const router = require('express').Router();

router.get("/:id", getRequest);

module.exports = router;