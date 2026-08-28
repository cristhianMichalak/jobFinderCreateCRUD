import express from "express";
import courseController from "../controllers/courseController.js";

const router = express.Router();

// add course via POST
router.post(`/add`, courseController);

export default router;
