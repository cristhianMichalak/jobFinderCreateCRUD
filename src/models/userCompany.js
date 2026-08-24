import Sequelize from "sequelize";
import db from "../db/connection.js";

const UserCompany = db.define(`users_companies`, {
  company_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cnpj: {
    type: Sequelize.STRING,
    unique: true,
  },
  ein: {
    type: Sequelize.STRING,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allwNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: true,
  underscored: true
});

export default UserCompany;
