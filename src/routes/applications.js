import express from "express";
import applicationController from "../controllers/applicationController.js";

const router = express.Router();

//add application via POST
router.post(`/add`, applicationController)

export default router;
