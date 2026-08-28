import UserCandidate from "../models/UserCandidate.js";

const userCandidateController = async (req, res) => {
  try {
    const {
      name,
      surname,
      email,
      password,
      address,
      city,
      state,
      country,
      postal_code,
    } = req.body;

    //insert data
    await UserCandidate.create({
      name,
      surname,
      email,
      password,
      address,
      city,
      state,
      country,
      postal_code,
    });

    res.status(201).redirect(`/pages/candidatePage.html`)
  } catch (err) {
    if (err.name = `SequelizeUniqueConstraintError`) {
        res.status(409)
    }
    res.status(500)
  }
};

export default userCandidateController