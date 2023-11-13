import axios from 'axios'

export const api = axios.create({
    baseURL: "https://healthy-mind.onrender.com/",
    headers: {
        'Content-Type' : 'application/json',
    },
})

