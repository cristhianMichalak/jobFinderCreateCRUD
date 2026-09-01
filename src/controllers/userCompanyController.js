import UserCompany from "../models/UserCompany.js";

const userCompanyController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      city,
      state,
      country,
      postal_code,
    } = req.body;

    await UserCompany.create({
      name,
      email,
      password,
      phone,
      address,
      city,
      state,
      country,
      postal_code,
    });

    res.send(201).redirect(`/pages/companyPage.html`);
  } catch (err) {
    if (err.name === `SequelizeUniqueConstraintError`) {
      res.send(409);
    }
    res.send(500);
  }
};

export default userCompanyController;
