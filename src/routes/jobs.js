import express from "express";
import jobController from "../controllers/jobController.js";

const router = express.Router();

// add job via POST
router.post(`/add`, jobController)

export default router;
