import axios from 'axios';
const API = axios.create({baseURL : process.env.HOST_URL})

export const userChats = (id) => API.get(`/chat/${id}`)