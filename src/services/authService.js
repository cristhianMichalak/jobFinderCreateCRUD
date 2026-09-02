import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//hashing
const hashPassword = async (password) => {
  const salt = 10;
  return await bcrypt.hash(password, salt);
};

//comparing
const passwordMatch = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

//generate token
const generateToken = async (user_id) => {
  return jwt.sign(
    {
      user_id,
      role,
    },
    process.env.JWT,
    {
      expiresIn: "1h",
    },
  );
};

export {
    hashPassword,
    passwordMatch,
    generateToken
}
