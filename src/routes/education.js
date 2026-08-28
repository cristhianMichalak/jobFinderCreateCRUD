import express from "express";
import educationController from "../controllers/educationController.js";

const router = express.Router();



// add education via POST
router.post(`/add`, educationController)

export default router;
