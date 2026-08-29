import Sequelize from "sequelize";
import db from "../db/connection.js";

const Resume = db.define(`resumes`, {
  resume_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    unique: true,
    references: {
      model: "users",
      key: "user_id",
    },
  },
  file_url: {
    type: Sequelize.STRING,
    unique: true,
  }
},
{
  timestamps: true,
  underscored: true,
});

export default Resume;
