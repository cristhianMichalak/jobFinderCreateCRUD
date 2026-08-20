import Sequelize from "sequelize";
import db from "../db/connection.js";

const Application = db.define("applications", {
  application_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  job_id: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.STRING,
  },
  created_at: {
    type: Sequelize.STRING,
  },
  updated_at: {
    type: Sequelize.STRING,
  },
});

export default Application;
