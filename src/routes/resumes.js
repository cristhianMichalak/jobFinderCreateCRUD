import express from "express";
import resumeController from "../controllers/resumeController.js";

const router = express.Router();

router.get(`/testResumes`, (req, res) => {
  res.json({ message: `resumes route working` });
});

router.post(`/add`, resumeController)

export default router;
