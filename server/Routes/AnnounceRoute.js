import express from "express";
import { createAnnouncement } from "../Controllers/AnnounceController.js"
const router = express.Router()

router.post('/', createAnnouncement)

export default router;