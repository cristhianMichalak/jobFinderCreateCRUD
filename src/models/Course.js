import Sequelize from "sequelize";
import db from "../db/connection.js";

const Course = db.define(`courses`, {
  courses_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
  },
  institution: {
    type: Sequelize.INTEGER,
  },
  completion_date: {
    type: Sequelize.INTEGER,
  },
});
