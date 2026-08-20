import Sequelize from "sequelize";
import db from "../db/connection.js";

const UserCompany = db.define(`user_companies`, {
  company_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  cnpj: {
    type: Sequelize.STRING,
  },
  ein: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  created_at: {
    type: Sequelize.STRING,
  },
  updated_at: {
    type: Sequelize.STRING,
  },
});

export default UserCompany;
