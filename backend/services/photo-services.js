const { PhotoSchema } = require('../models/inlimbo-db');
const mongoose = require('mongoose');

const Photo = mongoose.model('photos', PhotoSchema);

const retrievePhotos = async () => {
    const photos = await Photo.find({});
    return photos;
}

module.exports = {
    retrievePhotos
}