const {getRequest, postRequest} = require('../Controllers/clothControllers/clothUploadController')

const pictureUpload = require("../Utils/multer")

const router = require('express').Router();

router.get('/', getRequest)
router.post('/', pictureUpload.single("kep"), postRequest);

module.exports = router;