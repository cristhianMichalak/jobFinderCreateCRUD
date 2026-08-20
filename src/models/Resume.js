import Sequelize from "sequelize";
import db from "../db/connection.js";

const Resume = db.define(`resumes`, {
    user_id: {
        type: Sequelize.INTEGER
    },
    file_url: {
        type: Sequelize.STRING
    },
    file_name: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.STRING
    },
    updated_at: {
        type: Sequelize.STRING
    }
});
