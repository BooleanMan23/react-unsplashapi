import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID nSczzkFL8rCl81HMgp4hIpfMN9tHmTwJibu-YMl_fZQ'
    } 
});