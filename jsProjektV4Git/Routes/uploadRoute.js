const getUploadRequest = require('../Controllers/feltoltesController')

const router = require('express').Router();
router.get('/', getUploadRequest)

module.exports = router;