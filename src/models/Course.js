import Sequelize from "sequelize";
import db from "../db/connection.js";

const Course = db.define(`courses`, {
  course_id: {
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
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  institution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completion_date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  certificate_url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Course;
