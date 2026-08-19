import express from "Express";
import Sequelize from "sequelize";
import Application from "../models/Application.js";

const router = express.Router();

router.get('/test', (req, res) => {
    res.json( { message: `thats it`})
})

//add Application via post

router.post("./add", (req, res) => {
  const { applcation_id, user_id, job_id, status, created_at, updated_at } =
    req.body;

  //insert data

  Application.create({
    applcation_id,
    user_id,
    job_id,
    status,
    created_at,
    updated_at,
  });
  try {
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
});

export default router