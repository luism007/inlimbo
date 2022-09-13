export const getPhotos = async () => {
    const response = await fetch('http://localhost:3001/api/photography');
    return response.json();
}

export const getPhotosByOffset = async (offset, limit) => {
    const response = await fetch(`http://localhost:3001/api/photography?offset=${offset}&limit=${limit}`);
    return response.json();
}

export const getPhotosByCollectionId = async (collectionId) => {
    const ob = {collectionId: collectionId};
    const url = 'http://localhost:3001/api/collection';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ob)
    });
    return response.json();
}