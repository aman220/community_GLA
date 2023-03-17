import axios from "axios";

const API = axios.create({ baseURL: process.env.HOST_URL });

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/post", data);
export const uploadProjects = (data) => API.post("/projects", data);
export const uploadAnnouncement = (data) => API.post("/announce", data);