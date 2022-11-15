const connection = require("../../dbConfig");
const addToCart = async (req, res) => {
  try {
    const result =
      await connection`select * from maxwear_schema.cart where user_id=${req.body.user_id} and cart_status=0`;
    currentCart = result[0].cart_id;
    await connection`insert into maxwear_schema.cartitem (itemsize_id,cart_id,cart_quantity) values (${req.params.itemsize_id},${currentCart},${req.body.cart_quantity}
    })`;
    res.send({ status: 0, message: "Successfully added item to cart" });
  } catch (error) {
    res.send({ status: 1, message: "Error while adding item to cart" });
  }
};
module.exports = addToCart;
