const connection = require("../../dbConfig");
const editBrandLogo = async (req, res) => {
  try {
    await connection`update maxwear_schema.brand set brand_logo=${req.body.brand_logo} where brand_id=${req.params.brand_id}`;
    res.send({ status: 0, message: "Successfully changed brand logo" });
  } catch (error) {
    res.send({ status: 1, message: "Error while changing brand logo" });
  }
};
module.exports = editBrandLogo;
