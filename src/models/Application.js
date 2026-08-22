import Sequelize from "sequelize";
import db from "../db/connection.js";

const Application = db.define("applications", {
  application_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "users_candidates",
      key: "user_id",
    },
  },
  job_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "jobs",
      key: "job_id",
    },
  },
},
{
  uniqueKeys: {
    unique_application: {
      fields: ["user_id", "job_id"],
    },
  },
  timestamps: true,
  underscored: true,
});

export default Application;
