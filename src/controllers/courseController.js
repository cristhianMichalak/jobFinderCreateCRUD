import Course from "../models/Course.js";

const courseController = async (req, res) => {
  try {
    const {
      title,
      description,
      institution,
      completion_date,
      certificate_url,
    } = req.body;

    const user_id = req.user_id

    await Course.create({
      user_id,
      title,
      description,
      institution,
      completion_date,
      certificate_url,
    });

    res.status(201);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default courseController