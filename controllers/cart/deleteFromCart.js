const connection = require("../../dbConfig");
const deleteFromCart = async (req, res) => {
  try {
    await connection`select * from maxwear_schema.cart where user_id=${req.body.user_id} and cart_status=0`;
    currentCart = result[0].cart_id;
    await connection`delete from maxwear_schema.cartitem where itemsize_id=${req.params.itemsize_id} and cart_id=${currentCart}`;
    res.send({ status: 0, message: "Successfully deleted item from cart" });
  } catch (error) {
    res.send({ status: 1, message: "Error while deleting item from cart" });
  }
};
module.exports = deleteFromCart;
