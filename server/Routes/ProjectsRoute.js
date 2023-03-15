import express from "express";
import { createProjects, deleteProjects, getProjects, getTimelineProjects, updateProjects } from "../Controllers/projectsController.js";
// import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController.js";
const router = express.Router()

router.post('/', createProjects)
router.get('/:id', getProjects)
router.put('/:id', updateProjects)
router.delete("/:id", deleteProjects)
// router.put("/:id/like", likePost)
router.get("/:id/timeline", getTimelineProjects)

router.post('/' , async (req ,  res )=>{
    res.send("post Router")
})
export default router;