import express from "express";
import Resume from "../models/Resume.js";

const router = express.Router();

router.get(`/testResumes`, (req, res) => {
  res.json({ message: `resumes route working` });
});

router.post(`/add`, async (req, res) => {
  try {
    const { file_url, file_name } = req.body;
    const user_id = req.user_id;

    await Resume.create({
      user_id,
      file_url,
      file_name,
    });

    res.redirect(`/`);
    res.status(201).json({ message: `Resume added successfully` });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
