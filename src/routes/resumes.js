import express from "express";
import Resume from "../models/Resume.js";

const router = express.Router();

router.get(`/testResumes`, (req, res) => {
  res.json({ mesesage: `resumes route working` });
});

router.post(`/add`, async (req, res) => {
  try {
    const { user_id, file_url, file_name } = req.body;

    await Resume.create({
      user_id,
      file_url,
      file_name,
    });

    res.redirect(`/`);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
