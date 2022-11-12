const connection = require("../../dbConfig");
const deleteCategory = async (req, res) => {
  try {
    await connection`delete from maxwear_schema.category where category_id=${req.params.category_id}`;
    res.send({ status: 0, message: "Successfully deleted a category" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting a category" });
  }
};
module.exports = deleteCategory;
