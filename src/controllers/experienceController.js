import Experience from "../models/Experience.js";

const experienceController = async (req, res) => {
  try {
    const {company, position, description, start_date, end_date} = req.body;

    const user_id = req.user_id;

    await Experience.create({
      user_id,
      company,
      position,
      description,
      start_date,
      end_date,
  });

    res.status(201);
  } catch (err) {
    res.json( {message: err});
  }
};

export default experienceController;
