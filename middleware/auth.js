import jwt from "jsonwebtoken";

export const authorisation = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({ massege: "unauthorised user" });
  }

  try {
    if (token) {
      jwt.verify(token, process.env.SECRETE_KEY);
      next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ massege: "server error", error: error.message });
  }
};
