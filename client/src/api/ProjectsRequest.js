import axios from 'axios'


const API = axios.create({ baseURL: process.env.HOST_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= (id)=> API.get(`/projects/${id}/timeline`);
