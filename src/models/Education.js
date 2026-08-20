import Sequelize from "sequelize";
import db from "../db/connection.js";
import sequelize from "../db/connection.js";

const Education = db.define(`education`, {
  education_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  current_student: {
    type: Sequelize.INTEGER,
  },
  institution: {
    type: Sequelize.STRING,
  },
  course: {
    type: Sequelize.STRING,
  },
  degree: {
    type: Sequelize.STRING,
  },
  start_date: {
    type: Sequelize.STRING,
  },
  end_date: {
    type: Sequelize.STRING,
  },
});

export default Education
