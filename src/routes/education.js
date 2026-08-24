import express from "express";
import Education from "../models/Education.js";

const router = express.Router();

router.get(`/testEducation`, (req, res) => {
  res.json({ message: `Education route working` });
});

// add education via POST
router.post(`/add`, async (req, res) => {
  try {
    const {
      institution,
      course,
      degree,
      start_date,
      end_date,
    } = req.body;

    const user_id = req.user.id; 

    //insert
    await Education.create({
      user_id,
      institution,
      course,
      degree,
      start_date,
      end_date,
    });

    res.redirect(`/`);
    res.status(201).json({ message: `Education added successfully` });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router
