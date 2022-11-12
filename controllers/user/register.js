const connection = require("../../dbConfig");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const register = (req, res) => {
  const userID = uuid.v4();
  bcrypt.hash(req.body.pass, 13, async (err, hash) => {
    if (err) {
      res.send({ status: 1, message: "Error while hashing password" });
      return;
    } else
      try {
        await connection`insert into maxwear_schema.appuser (appuser_id,appuser_fname,appuser_lname,appuser_mail,appuser_hash) values (${userID},${req.body.fname},${req.body.lname},${req.body.mail},${hash})`;
        const token = jwt.sign(
          {
            userID,
            fname: req.body.fname,
            lname: req.body.lname,
            mail: req.body.mail,
          },
          process.env.JWT_SECRET
        );
        res.send({
          status: 0,
          message: "Successfully created a new account",
          token,
        });
      } catch (error) {
        res.send({ status: 1, message: "Error while creating a new account" });
      }
  });
};
module.exports = register;
