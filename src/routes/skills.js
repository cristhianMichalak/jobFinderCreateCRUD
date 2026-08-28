import express from "express";
import skillController from "../controllers/skillController.js";

const router = express.Router();

router.post(`/add`, skillController)

export default router;
