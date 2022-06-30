const express = require('express');
const {getPhotos, addPhoto, getPhotosByOffset, getPhotosByCollectionId} = require('../controllers/photos-controller');
const router = express.Router();

router.get('/photography', getPhotosByOffset);
router.get('/photography', getPhotos);
router.post('/photography', addPhoto);

router.get('/collection', getPhotosByCollectionId);

module.exports = router;