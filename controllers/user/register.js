const connection = require("../../dbConfig");
const uuid = require("uuid");
const register = async (req, res) => {
  try {
    await connection`insert into maxwear_schema.category (category_id,category_name) values (${uuid.v4()},${
      req.body.category_name
    })`;
    res.send({ status: 0, message: "Successfully created a new account" });
  } catch (error) {
    res.send({ status: 1, message: "Error while creating a new account" });
  }
};
module.exports = register;
