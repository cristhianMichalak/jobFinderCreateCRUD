import express from "express";
import Skill from "../models/Skill.js";

const router = express.Router();

router.get(`/testSkills`, (req, res) => {
  res.json({ message: `Skills route working` });
});

router.post(`/add`, async (req, res) => {
  try {
    const { level, title } = req.body;
    const user_id = req.user_id;

    await Skill.create({ user_id, level, title });

    res.status(201).json({ message: `Skills added successfully` });
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
