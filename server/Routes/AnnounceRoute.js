import express from 'express';
import { createAnnouncement, deleteAnnouncement, getAnnouncement ,getTimelineAnnounc } from '../Controllers/AnnounceController.js';
const router =  express.Router()

router.post('/', createAnnouncement)
router.get('/:id', getAnnouncement)
router.delete('/:id', deleteAnnouncement)
router.get("/:id/timeline", getTimelineAnnounc)

export default router;