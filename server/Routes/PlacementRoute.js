import express from "express";
import { createPlacement, getPlacements, getTimelinePlacement, updatePlacements } from "../Controllers/PlacementsController.js";


const router = express.Router()



router.post('/', createPlacement)
router.get('/:id', getPlacements)
router.put('/:id', updatePlacements)
// router.delete("/:id", deleteProjects)
// router.put("/:id/like", likePost)
router.get("/:id/timeline", getTimelinePlacement)



router.post('/' , async (req ,  res )=>{
    res.send("post Router")
})
export default router;