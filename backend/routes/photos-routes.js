const express = require('express');
const {getPhotos, addPhoto} = require('../controllers/photos-controller');
const router = express.Router();

router.get('/photography', getPhotos);
router.post('/photography', addPhoto);

module.exports = router;