const connection = require("../../dbConfig");
const deleteUser = async (req, res) => {
  try {
    await connection`delete from maxwear_schema.appuser where appuser_id=${req.params.user_id}`;
    res.send({ status: 0, message: "Successfully deleted a user" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting a user" });
  }
};
module.exports = deleteUser;
