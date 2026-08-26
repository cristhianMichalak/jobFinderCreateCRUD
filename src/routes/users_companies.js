import express from "express";
import UserCompany from "../models/userCompany.js";

const router = express.Router();

router.get(`/testuser_companies`, (req, res) => {
  res.json({ message: `user_companies route working` });
});

router.post(`/add`, async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      city,
      state,
      country,
      postal_code
    } = req.body;

    await UserCompany.create({
      name,
      email,
      password,
      phone,
      address,
      city,
      state,
      country,
      postal_code
    });

    res.status(201).json({ message: "Company added with success" });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
