import express from "express";
import UserCandidate from "../models/UserCandidate.js";

const router = express.Router();

router.get(`/testuser_candidates`, (req, res) => {
  res.json({ message: `user_candidates route working` });
});

router.post(`/add`, async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      password,
      address,
      city,
      state,
      country,
      postal_code,
    } = req.body;

    await UserCandidate.create({
      name,
      surname,
      email,
      password,
      address,
      city,
      state,
      country,
      postal_code,
    });

    res.status(201).redirect(`/pages/viewJobs.html`)
  } catch (err) {
    res.status(409)
  }
});

export default router;
