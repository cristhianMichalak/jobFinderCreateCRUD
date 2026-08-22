import express from "express";
import Education from "../models/Education.js";

const router = express.Router();

router.get(`/testEducation`, (req, res) => {
  res.json({ message: `Education route working` });
});

// add application via POST
router.post(`/add`, async (req, res) => {
  try {
    const {
      institution,
      course,
      degree,
      start_date,
      end_date,
    } = req.body;

    const user_id = req.user.id; // Assuming you have authentication middleware that sets req.user

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
  } catch (err) {
    res.json({ message: err });
  }
});

export default router
