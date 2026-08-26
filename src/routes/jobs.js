import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

router.get("/testJobs", (req, res) => {
  res.json({ message: `Jobs route working` });
});

// add application via POSST
router.post(`/add`, async (req, res) => {
  try {
    const {
      amount_role,
      level_role,
      title,
      description,
      requirements,
      benefits,
      location,
      field,
      budget,
    } = req.body;

    const company_id = req.company_id;
    //insert data
    await Job.create({
      amount_role,
      company_id,
      level_role,
      title,
      description,
      requirements,
      benefits,
      location,
      field,
      budget,
    });
    res.status(201).json({ message: `Job added successfully` });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
