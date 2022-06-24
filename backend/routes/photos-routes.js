const express = require('express');
const {getPhotos} = require('../controllers/photos-controller');
const router = express.Router();

router.get('/photography', getPhotos);

module.exports = router;