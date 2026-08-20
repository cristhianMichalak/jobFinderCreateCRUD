import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

router.get(`/testCourses`, (req, res) => {
  res.json({ message: `Courses route working` });
});

// add application via POST
router.post(`/add`, async (req, res) => {
  try {
    const {
      user_id,
      title,
      description,
      institution,
      completion_date,
      certificate_url,
    } = req.body;

    //insert
    await Course.create({
      user_id,
      title,
      description,
      institution,
      completion_date,
      certificate_url,
    });

    res.redirect(`/`);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
