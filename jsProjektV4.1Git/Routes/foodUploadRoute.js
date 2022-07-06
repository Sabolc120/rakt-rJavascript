const {getRequest, postRequest} = require('../Controllers/foodControllers/foodUploadController')

const pictureUpload = require("../Utils/multer")

const router = require('express').Router();

router.get('/', getRequest)
router.post('/', pictureUpload.single("kep"), postRequest);

module.exports = router;