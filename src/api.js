import axios from "axios";

const url = 'http://localhost:8000/'
const api = axios.create({
    baseURL:  url,
    //'https://viacep.com.br/ws/01001000/json/'
    headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, DELETE, POST, PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' 
    }
})

export default api