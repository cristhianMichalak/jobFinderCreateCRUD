import Sequelize from "sequelize";
import db from "../db/connection.js";

const Experience = db.define(`experiences`, {
  experience_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users_candidates",
      key: "user_id",
    },
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  end_date: {
    type: Sequelize.DATE,
  },
},
{
  timestamps: false
});

export default Experience;
