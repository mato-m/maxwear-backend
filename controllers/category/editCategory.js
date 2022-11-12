const connection = require("../../dbConfig");
const editCategory = async (req, res) => {
  try {
    await connection`update maxwear_schema.category set category_name=${req.body.category_name} where category_id=${req.params.category_id}`;
    res.send({ status: 0, message: "Successfully changed a category name" });
  } catch (error) {
    res.send({ status: 1, message: "Error while changing a category name" });
  }
};
module.exports = editCategory;
