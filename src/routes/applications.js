import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

router.get(`/testApplications`, (req, res) => {
  res.json({ message: `Applications route working` });
});

// add application via POST
router.post(`/add`, async (req, res) => {
  try {
    const {job_id} = req.body;

    const user_id = req.user.id; // Assuming you have authentication middleware that sets req.user
    //insert into table
    await Application.create({
      user_id,
      job_id,
    });

    res.redirect(`/`);
    res.status(201).json({ message: `Application added successfully` });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
