const connection = require("../../dbConfig");
const setToDelivery = async (req, res) => {
  try {
    await connection`update maxwear_schema.cart set cart_status=2 where cart_id=${req.params.cart_id}`;
    res.send({
      status: 0,
      message: "Successfully set cart status to delivery",
    });
  } catch (error) {
    res.send({
      status: 1,
      message: "Error while changing cart status",
    });
  }
};
module.exports = setToDelivery;
