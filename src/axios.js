import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://taskpro-165b8-default-rtdb.firebaseio.com/'
});

export default instance;