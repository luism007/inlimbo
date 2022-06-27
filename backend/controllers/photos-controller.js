const { retrievePhotos, postPhoto } = require('../services/photo-services');

const getPhotos = async (req, res, next) => {
    try {
        
        const photos = await retrievePhotos();
        res.send(photos).status(200);

    } catch (e) {
        res.sendStatus(500);
    }
}

const addPhoto = async (req, res, next) => {
    try {
        const photo = req.body;
        const postedPhoto = await postPhoto(photo);
        res.send({message: 'Photo successfully posted!', photo: postedPhoto}).status(201);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = {
    getPhotos, 
    addPhoto
};