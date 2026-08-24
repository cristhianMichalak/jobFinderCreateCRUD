import Sequelize from "sequelize";
import db from "../db/connection.js";

const Skill = db.define(`skills`, {
  skill_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: "users_candidates",
      key: "user_id",
    },
  },
  level: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
},
{
  timestamps: false
});

export default Skill;
