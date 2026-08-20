import Sequelize from "sequelize";
import db from "../db/connection.js";

const Skill = db.define(`skills`, {
  skill_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  level: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
});

export default Skill;
