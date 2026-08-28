import express from "express";
import userCandidateController from "../controllers/userCandidateController.js";

const router = express.Router();

router.post(`/add`, userCandidateController)

export default router;
