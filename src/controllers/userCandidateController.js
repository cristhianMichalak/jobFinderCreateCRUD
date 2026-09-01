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

    res.send(201).redirect(`/pages/candidatePage.html`);
  } catch (err) {
    if (err.name === `SequelizeUniqueConstraintError`) {
      res.send(409);
    }
    res.send(500);
  }
};

export default userCandidateController;
