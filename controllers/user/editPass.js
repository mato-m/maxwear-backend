const connection = require("../../dbConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const editPass = async (req, res) => {
  try {
    const result =
      await connection`select appuser_hash from maxwear_schema.appuser where appuser_id=${req.params.user_id}`;
    const currentPassword = result[0].appuser_hash;
    const currentPassTrue = await bcrypt.compare(
      req.body.oldPass,
      currentPassword
    );
    if (currentPassTrue) {
      bcrypt.hash(req.body.newPass, 13, async (err, hash) => {
        if (err) {
          res.send({ status: 1, message: "Error while hashing password" });
          return;
        } else {
          try {
            await connection`update maxwear_schema.appuser set appuser_hash=${hash} where appuser_id=${req.params.user_id}`;
            const result =
              await connection`select * from maxwear_schema.appuser where appuser_id=${req.params.user_id}`;
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
              message: "Successfully changed password",
              token,
            });
          } catch (error) {
            res.send({ status: 1, message: "Error while changing password" });
          }
        }
      });
    } else {
      res.send({ status: 1, message: "Old password is incorrect" });
    }
  } catch (error) {
    res.send({ status: 1, message: "Error while changing password" });
  }
};
module.exports = editPass;
