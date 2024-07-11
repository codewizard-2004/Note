import express from "express";
import { addItemtoUserContents, getContentfromUser, removeItemfromUserContents, updateItemfromContents } from "../controllers/content.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute ,addItemtoUserContents)

router.post("/delete" , protectRoute ,removeItemfromUserContents)

router.post("/update", protectRoute ,updateItemfromContents)

router.get("/:id" , protectRoute , getContentfromUser)

export default router