require("dotenv").config();
const express = require("express");
const brandRouter = require("./routers/brandRouter");
const categoryRouter = require("./routers/categoryRouter");
const colorRouter = require("./routers/colorRouter");
app = express();
app.use(express.json());
app.use("/static", express.static("static"));
app.use("/brands", brandRouter);
app.use("/categories", categoryRouter);
app.use("/colors", colorRouter);
app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});