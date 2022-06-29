const { retrievePhotos, retrievePhotosByOffset, postPhoto } = require('../services/photo-services');

const getPhotos = async (req, res, next) => {
    try {
        
        const photos = await retrievePhotos();
        res.send(photos).status(200);

    } catch (e) {
        res.sendStatus(500);
    }
}

const getPhotosByOffset = async(req, res, next) => {
    try{ 
        const offset = req.query.offset;
        const limit = req.query.limit;
        const photos = await retrievePhotosByOffset(offset, limit);
        res.send(photos).status(200);
    }
    catch(e){
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
    getPhotosByOffset,
    addPhoto
};