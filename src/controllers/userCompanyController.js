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

    //insert data
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

    res.status(201).redirect(`/pages/companyPage.html`);
  } catch (err) {
    if (err.name = `SequelizeUniqueConstraintError`) {
        res.status(409)
    }
    res.status(500);
  }
};

export default userCompanyController;
