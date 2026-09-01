import Resume from "../models/Resume.js";

const resumeController = async (req, res) => {
  try {
    const { file_url } = req.body;

    const user_id = req.user_id;

    await Resume.create({
      user_id,
      file_url,
    });

    res.send(201);
  } catch (err) {
    res.send(500);
  }
};

export default resumeController;
