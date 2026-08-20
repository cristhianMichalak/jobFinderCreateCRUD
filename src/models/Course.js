import Sequelize from "sequelize";
import db from "../db/connection.js";

const Course = db.define(`courses`, {
  course_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  institution: {
    type: Sequelize.STRING,
  },
  completion_date: {
    type: Sequelize.STRING,
  },
  certificate_url: {
    type: Sequelize.STRING,
  },
});

export default Course;
