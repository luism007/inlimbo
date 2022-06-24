export const getPhotos = async () => {
    const response = await fetch('http://localhost:3001/api/photography');
    return response.json();
}