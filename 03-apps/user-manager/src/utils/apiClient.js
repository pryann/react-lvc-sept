import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    'Access-Control-Allow-Credentials': true,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
