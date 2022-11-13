const connection = require("../../dbConfig");
const editBrandName = async (req, res) => {
  try {
    await connection`update maxwear_schema.brand set brand_name=${req.body.brand_name} where brand_id=${req.params.brand_id}`;
    res.send({ status: 0, message: "Successfully changed a brand name" });
  } catch (error) {
    res.send({ status: 1, message: "Error while changing a brand name" });
  }
};
module.exports = editBrandName;
