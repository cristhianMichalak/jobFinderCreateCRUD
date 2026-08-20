import Sequelize from "sequelize"
import db from "../db/connection.js"

const Job = db.define(`jobs`, {
    job_id: {
        type: Sequelize.INTEGER
    },
    new_role: {
        type: Sequelize.INTEGER
    },
    amount_role: {
        type: Sequelize.INTEGER
    },
    company_id: {
        type: Sequelize.INTEGER
    },
    level_role: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    benefits: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.STRING
    },
    field: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.STRING
    },
    updated_at: {
        type: Sequelize.STRING
    }
})

export default Job