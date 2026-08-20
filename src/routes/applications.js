import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

router.get(`/testApplications`, (req, res) => {
  res.json({ message: `Applications route working` });
});

// add application via POST
router.post(`/add`, async (req, res) => {
  try {
    const { user_id, job_id, status } = req.body;
    //insert
    await Application.create({
      user_id,
      job_id,
      status,
    });

    res.redirect(`/`);
  } catch (err) {
    res.json({ message: error });
  }
});

export default router;
