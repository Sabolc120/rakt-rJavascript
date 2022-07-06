const {getRequest, postRequest} = require('../Controllers/foodControllers/foodRefreshController')
const pictureUpload = require('../Utils/multer')

const router = require('express').Router()

router.get("/:id", getRequest);
router.post("/", pictureUpload.single("kep"), postRequest);

module.exports = router;