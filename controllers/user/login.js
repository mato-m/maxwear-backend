const connection = require("../../dbConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const login = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.appuser where appuser_mail=${req.body.mail}`;
    const isPasswordOkay = await bcrypt.compare(
      req.body.pass,
      result[0].appuser_hash
    );
    if (isPasswordOkay) {
      const token = jwt.sign(
        {
          userID: result[0].appuser_id,
          fname: result[0].appuser_fname,
          lname: result[0].appuser_lname,
          mail: result[0].appuser_mail,
          role: result[0].appuser_role,
        },
        process.env.JWT_SECRET
      );
      res.send({
        status: 0,
        message: "Successfully logged in",
        token,
      });
    } else {
      res.send({
        status: 1,
        message: "Password is wrong",
      });
    }
  } catch (error) {
    res.send({ status: 1, message: "Error while logging in" });
  }
};
module.exports = login;
