const express = require('express');
const {getPhotos, addPhoto, getPhotosByOffset} = require('../controllers/photos-controller');
const router = express.Router();

router.get('/photography', getPhotosByOffset);
router.get('/photography', getPhotos);
router.post('/photography', addPhoto);

module.exports = router;