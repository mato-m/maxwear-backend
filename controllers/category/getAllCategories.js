const connection = require("../../dbConfig");
const getAllCategories = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.category order by category_name`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting all categories" });
  }
};
module.exports = getAllCategories;
