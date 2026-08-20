import Sequelize from "sequelize";
import db from "../db/connection.js";

const UserCandidate = db.define(`user_candidates`, {
  user_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  surname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  cpf: {
    type: Sequelize.STRING,
  },
  ssn: {
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
  postal_code: {
    type: Sequelize.STRING,
  },
  created_at: {
    type: Sequelize.STRING,
  },
  updated_at: {
    type: Sequelize.STRING,
  },
});

export default UserCandidate;
