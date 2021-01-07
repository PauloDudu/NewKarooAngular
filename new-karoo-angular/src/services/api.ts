import axios from 'axios';

export const api = axios.create({
    // baseURL: 'https://api-new-karoo.herokuapp.com/karoo',
    baseURL: 'http://localhost:3333/karoo'
})

