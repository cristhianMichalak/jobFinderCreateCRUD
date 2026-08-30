import Job from "../models/Job.js";

const jobController = async (req, res) => {
  try {
    const {
      amount_role,
      level_role,
      title,
      description,
      requirements,
      benefits,
      location,
      field,
      budget,
    } = req.body;

    const company_id = req.company_id;

    await Job.create({
      amount_role,
      company_id,
      level_role,
      title,
      description,
      requirements,
      benefits,
      location,
      field,
      budget,
    });

    res.status(201);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default jobController;
