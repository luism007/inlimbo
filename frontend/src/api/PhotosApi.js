const standardApi = "https://inlimbo-backend.azurewebsites.net";
export const getPhotos = async () => {
    const url = (process.env.NODE_ENV == 'production') ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV;
    const response = await fetch(`${standardApi}/api/photography`);
    return response.json();
}

export const getPhotosByOffset = async (offset, limit) => {
    const url = (process.env.NODE_ENV == 'production') ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV;
    const response = await fetch(`${standardApi}/api/photography?offset=${offset}&limit=${limit}`);
    return response.json();
}

export const getPhotosByCollectionId = async (collectionId, originalPhotoId) => {
    const apiUrl = (process.env.NODE_ENV == 'production') ? process.env.REACT_APP_API_URL_PROD : process.env.REACT_APP_API_URL_DEV;
    const ob = {_id: originalPhotoId, collectionId: collectionId};
    const url = `${standardApi}/api/collection`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ob)
    }).catch((e) => console.log(e));
    return response.json();
}