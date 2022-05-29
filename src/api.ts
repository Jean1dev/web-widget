import axios from 'axios';

const baseUrl = 'https://api-sistemas-interno.herokuapp.com/api'

const http = axios.create({
    baseURL: baseUrl,
    timeout: 60000
})

export default http