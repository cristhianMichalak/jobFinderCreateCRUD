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
      cpf,
      ssn,
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
      cpf,
      ssn,
      address,
      city,
      state,
      country,
      postal_code,
    });

    res.redirect(`/`);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
