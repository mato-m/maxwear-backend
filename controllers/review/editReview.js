const connection = require("../../dbConfig");
const editReview = async (req, res) => {
  try {
    await connection`update maxwear_schema.review set review_text=${req.body.review_text} where review_id=${req.params.review_id}`;
    res.send({ status: 0, message: "Successfully changed review" });
  } catch (error) {
    res.send({ status: 1, message: "Error while changing review" });
  }
};
module.exports = editReview;
