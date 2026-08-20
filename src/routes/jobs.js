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
      job_id,
      new_role,
      amount_role,
      company_id,
      level_role,
      title,
      description,
      benefits,
      location,
      field,
      budget,
      created_at,
      updated_at,
    } = req.body;
    //insert data
    Job.create({
      job_id,
      new_role,
      amount_role,
      company_id,
      level_role,
      title,
      description,
      benefits,
      location,
      field,
      budget,
      created_at,
      updated_at,
    });
    res.redirect(`/`);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
