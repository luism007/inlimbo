export const getPhotos = async () => {
    const response = await fetch('http://localhost:3001/api/photography');
    return response.json();
}

export const getPhotosByOffset = async (offset, limit) => {
    const response = await fetch(`http://localhost:3001/api/photography?offset=${offset}&limit=${limit}`);
    return response.json();
}