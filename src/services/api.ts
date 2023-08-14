import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        'Content-Type' : 'application/json',
    },
})

export default api