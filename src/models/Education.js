import Sequelize from "sequelize";
import db from "../db/connection.js";

const Education = db.define(`education`, {
  education_id: {
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
  institution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  course: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  degree: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

export default Education;
