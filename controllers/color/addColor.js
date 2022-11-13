const connection = require("../../dbConfig");
const uuid = require("uuid");
const addColor = async (req, res) => {
  try {
    await connection`insert into maxwear_schema.color (color_id,color_name,color_hex) values (${uuid.v4()},${
      req.body.color_name
    },${req.body.color_hex}
    })`;
    res.send({ status: 0, message: "Successfully added a new color" });
  } catch (error) {
    res.send({ status: 1, message: "Error while adding a new color" });
  }
};
module.exports = addColor;
