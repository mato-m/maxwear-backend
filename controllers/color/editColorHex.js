const connection = require("../../dbConfig");
const editColorHex = async (req, res) => {
  try {
    await connection`update maxwear_schema.color set color_hex=${req.body.color_hex} where color_id=${req.params.color_id}`;
    res.send({
      status: 0,
      message: "Successfully changed hex value of a color",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing hex value of a color",
    });
  }
};
module.exports = editColorHex;
