const { retrievePhotos } = require('../services/photo-services');

const getPhotos = async (req, res, next) => {
    try {
        
        const photos = await retrievePhotos();
        res.send(photos).status(200);

    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = {
    getPhotos
};