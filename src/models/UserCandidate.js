import Sequelize from "sequelize";
import db from "../db/connection.js";

const UserCandidate = db.define(`users_candidates`, {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
  },
  ssn: {
    type: Sequelize.STRING,
    unique: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  postal_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: true,
  underscored: true,
});

export default UserCandidate;
