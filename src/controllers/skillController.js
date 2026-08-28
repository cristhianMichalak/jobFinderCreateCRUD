import Skill from "../models/Skill.js";

const skillController = async (req, res) => {
  try {
    const { level, title } = req.body;

    const user_id = req.user_id

    await Skill.create({
      user_id,
      level,
      title,
    });

    res.status(201);
  } catch (err) {
    if ((err.name = `SequelizeUniqueConstraintError`)) {
      res.status(409);
    }
    res.status(500);
  }
};

export default skillController;
