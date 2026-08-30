import express from "express";
import jobController from "../controllers/jobController.js";

const router = express.Router();

// add application via POSST
router.post(`/add`, jobController)

export default router;
