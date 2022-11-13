const connection = require("../../dbConfig");
const jwt = require("jsonwebtoken");
const editFname = async (req, res) => {
  try {
    await connection`update maxwear_schema.appuser set appuser_fname=${req.body.fname} where appuser_id=${req.params.user_id}`;
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
    res.send({ status: 0, message: "Successfully changed first name", token });
  } catch (error) {
    res.send({ status: 1, message: "Error while changing first name" });
  }
};
module.exports = editFname;
