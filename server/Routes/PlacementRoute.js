import express from "express";
import { createPlacement } from "../Controllers/PlacementsController";


const router = express.Router()



router.post('/', createPlacement)



router.post('/' , async (req ,  res )=>{
    res.send("post Router")
})
export default router;