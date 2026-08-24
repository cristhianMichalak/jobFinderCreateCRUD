import Sequelize from "sequelize";
import db from "../db/connection.js";

const Job = db.define(
  `jobs`,
  {
    job_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount_role: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    company_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "user_companies",
        key: "company_id",
      },
    },
    level_role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    requirements: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    benefits: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    field: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    budget: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
  },
);

export default Job;
