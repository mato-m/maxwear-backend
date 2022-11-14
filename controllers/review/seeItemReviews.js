const connection = require("../../dbConfig");
const seeItemReviews = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.review where item_id=${req.params.item_id} order by review_time desc`;
    res.send({ status: 0, result });
  } catch (error) {
    res.send({ status: 1, message: "Error while getting reviews" });
  }
};
module.exports = seeItemReviews;
