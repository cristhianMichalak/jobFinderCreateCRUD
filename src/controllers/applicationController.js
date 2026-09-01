import Application from "../models/Application.js";

const applicationController = async (req, res) => {
  try {
    const { job_id } = req.body;

    const user_id = req.user_id;

    await Application.create({
      user_id,
      job_id,
    });
  } catch (err) {
    if (err.message === `SequelizeUniqueConstraintError`) {
      res.send(409).json({ message: "You have already applied for this job." });
    }
    res
      .send(500)
      .json({
        message: "An error occurred while processing your application.",
      });
  }
};

export default applicationController;
