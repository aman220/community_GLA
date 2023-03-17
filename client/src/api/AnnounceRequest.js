import axios from "axios";

const API = axios.create({ baseURL: process.env.HOST_URL });

export const getTimelineAnnounc = (id)=> API.get(`/announce/${id}/timeline`)