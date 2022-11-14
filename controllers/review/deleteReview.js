const connection = require("../../dbConfig");
const deleteReview = async (req, res) => {
  try {
    await connection`delete from maxwear_schema.review where review_id=${req.params.review_id}`;
    res.send({ status: 0, message: "Successfully deleted a review" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting a review" });
  }
};
module.exports = deleteReview;
