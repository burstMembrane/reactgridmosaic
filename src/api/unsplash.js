import axios from 'axios';


// have to call environment variable with "REACT_APP_{variable}"
const accessKey = process.env.REACT_APP_API_KEY;

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${accessKey}`
    },
});

export default unsplash;