import express from "express";
import userCandidateController from "../controllers/userCandidateController.js";

const router = express.Router();

// add user via post
router.post(`/add`, userCandidateController)

export default router;
