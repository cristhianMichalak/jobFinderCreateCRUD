import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

router.get(`/testExperiences`, (req, res) => {
  res.json({ message: "experiences route working" });
});

// add experience via POST
router.post(`/add`, async (req, res) => {
  try {
    const { company, position, description, start_date, end_date } = req.body;

    const user_id = req.user_id;
    //insert data
    await Experience.create({
      user_id,
      company,
      position,
      description,
      start_date,
      end_date,
    });

    res.redirect(`/`);
    res.status(201).json({ message: `Experience added successfully` });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
