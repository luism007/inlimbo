const { PhotoSchema } = require('../models/inlimbo-db');
const mongoose = require('mongoose');

const Photo = mongoose.model('photos', PhotoSchema);

const retrievePhotos = async () => {
    const photos = await Photo.find({});
    return photos;
}

const postPhoto = async (photo) => { 
    return await Photo.create(photo);
}

module.exports = {
    retrievePhotos,
    postPhoto
}