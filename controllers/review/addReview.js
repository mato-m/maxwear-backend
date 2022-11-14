const connection = require("../../dbConfig");
const uuid = require("uuid");
const addReview = async (req, res) => {
  try {
    await connection`insert into maxwear_schema.review (review_id,user_id,item_id,review_text) values (${uuid.v4()},${
      req.body.user_id
    },${req.body.item_id},${req.body.review_text}
    })`;
    res.send({ status: 0, message: "Successfully added a review" });
  } catch (error) {
    res.send({ status: 1, message: "Error while adding a review" });
  }
};
module.exports = addReview;
