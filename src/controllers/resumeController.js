import Resume from "../models/Resume.js";

const resumeController = async (req, res) => {
  try {
    const { file_url, file_name } = req.body;

    const user_id = req.user_id;

    await Resume.create({
      user_id,
      file_url,
    });

    res.status(201);
  } catch (err) {
    res.status(500);
  }
};

export default resumeController;
