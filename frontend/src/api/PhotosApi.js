export const getPhotos = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/photography`);
    return response.json();
}

export const getPhotosByOffset = async (offset, limit) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/photography?offset=${offset}&limit=${limit}`);
    return response.json();
}

export const getPhotosByCollectionId = async (collectionId, originalPhotoId) => {
    const ob = {_id: originalPhotoId, collectionId: collectionId};
    const url = `${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/api/collection`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ob)
    });
    return response.json();
}