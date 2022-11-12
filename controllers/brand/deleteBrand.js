const connection = require("../../dbConfig");
const deleteBrand = async (req, res) => {
  try {
    await connection`delete from maxwear_schema.brand where brand_id=${req.params.brand_id}`;
    res.send({ status: 0, message: "Succesfully deleted a brand" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting a brand" });
  }
};
module.exports = deleteBrand;
