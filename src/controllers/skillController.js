import Skill from "../models/Skill.js";

const skillController = async (req, res) => {
  try {
    const { level, title } = req.body;

    const user_id = req.user_id;

    await Skill.create({
      user_id,
      level,
      title,
    });

    res.send(201);
  } catch (err) {
    if (err.name === `SequelizeUniqueConstraintError`) {
      res.send(409);
    }
    res.send(500);
  }
};

export default skillController;
