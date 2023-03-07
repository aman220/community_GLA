import express from "express";
import { deleteUser, getUser, updateUser } from "../Controllers/UserController.js"

const router = express.Router();

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.put('/:id', deleteUser)

export default router;