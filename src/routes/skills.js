import express from "express";
import Skill from "../models/Skill.js";

const router = express.Router();

router.get(`/testSkills`, (req, res) => {
  res.json({ message: `Skills route working` });
});

router.post(`/add`, async (req, res) => {
  try {
    const { user_id, level, title } = req.body;

    await Skill.create({ user_id, level, title });

    res.redirect(`/`);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
