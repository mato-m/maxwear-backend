const connection = require("../../dbConfig");
const deleteColor = async (req, res) => {
  try {
    await connection`delete from maxwear_schema.color where color_id=${req.params.color_id}`;
    res.send({ status: 0, message: "Successfully deleted a color" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting a color" });
  }
};
module.exports = deleteColor;
