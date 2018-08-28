import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f82ba.firebaseio.com/'
});

export default instance;
