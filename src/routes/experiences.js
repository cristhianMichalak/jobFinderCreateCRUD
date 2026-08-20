import express from "express";
import Experience from "../models/Experience.js";

const router = express.Router();

router.get(`/testExperiences`, (req, res) => {
  res.json({ message: "experiences route working" });
});

// add application via POST
router.post(`/add`, async (req, res) => {
  try {
    const { user_id, company, position, description, start_date, end_date } =
      req.body;
    //insert data
    await Experience.create({
        user_id,
        company, 
        position,
        description,
        start_date,
        end_date
    })
    
    res.redirect(`/`);
  } catch (err) {
    res.json( { message: err})
  }
});

export default router