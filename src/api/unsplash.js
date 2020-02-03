import axios from 'axios';


const accessKey = 'e7b5cfe3e0952e934f895668e6eddfd91c38a3a45ec3f64ba55d40d3b297f6b8';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${accessKey}`
    },
});

export default unsplash;