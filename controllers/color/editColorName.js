const connection = require("../../dbConfig");
const editColorName = async (req, res) => {
  try {
    await connection`update maxwear_schema.color set color_name=${req.body.color_name} where color_id=${req.params.color_id}`;
    res.send({ status: 0, message: "Successfully changed a color name" });
  } catch (error) {
    res.send({ status: 1, message: "Error while changing a color name" });
  }
};
module.exports = editColorName;
