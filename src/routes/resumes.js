import express from "express";
import resumeController from "../controllers/resumeController.js";

const router = express.Router();

//add resume via post
router.post(`/add`, resumeController)

export default router;
