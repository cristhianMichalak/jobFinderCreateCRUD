import Sequelize from "sequelize"
import db from "../db/connection.js"

const Experience = db.define(`experiences`, {
    user_id: {
        type: Sequelize.INTEGER
    },
    company: {
        type: Sequelize.STRING
    },
    position: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    start_date: {
        type: Sequelize.STRING
    },
    end_date: {
        type: Sequelize.STRING
    }
})

export default Experience