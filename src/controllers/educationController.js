import Education from "../models/Education.js";

const educationController = async (req, res) => {
  try {
    const { institution, course, degree, start_date, end_date } = req.body;

    const user_id = req.user_id;

    await Education.create({
      user_id,
      institution,
      course,
      degree,
      start_date,
      end_date,
    });

    res.status(201);
  } catch (err) {
    res.status(500);
  }
};

export default educationController;
