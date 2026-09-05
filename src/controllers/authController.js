import userCandidate from "../models/UserCandidate.js";
import userCompany from "../models/UserCompany.js";
import { passwordMatch } from "../services/authService.js";
import { generateToken } from "../services/authService.js";

const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let user;
    //check candidate
    if (role === candidate) {
      user = await userCandidate.findOne({
        where: { email },
      }); //check company
    } else if (role === userCompany) {
      user = await userCompany.findOne({
        where: { email },
      }); //invalid type
    } else {
      return res.send({ message: `Invalid user type` });
    } //wrong email or password
    if (!user) {
      return res.send({ message: `invalid email or password` });
    }
    //check password
    const passwordIsCorrect = await paasswordMatch(password, user.password);

    //invalid password
    if (!passwordIsCorrect) {
      return res.send({ message: `invalid email or password` });
    }

    //create JWT
    const token = generateToken(user.user_id, role);
    return res.status({ message: `Login successfull`, token})
  } catch (err) {
    return res.send({ message: err})
  }
};

export default login