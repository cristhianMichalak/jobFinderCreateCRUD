import express from "express";
import experienceController from "../controllers/experienceController.js";

const router = express.Router();

// add experience via POST
router.post(`/add`, experienceController);

export default router;
