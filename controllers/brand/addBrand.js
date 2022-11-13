const connection = require("../../dbConfig");
const uuid = require("uuid");
const addBrand = async (req, res) => {
  try {
    await connection`insert into maxwear_schema.brand (brand_id,brand_name,brand_logo) values (${uuid.v4()},${
      req.body.brand_name
    },${req.body.brand_logo}
    })`;
    res.send({ status: 0, message: "Successfully added a new brand" });
  } catch (error) {
    res.send({ status: 1, message: "Error while adding a new brand" });
  }
};
module.exports = addBrand;
