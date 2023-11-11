const express = require("express");
const cors = require("cors");
const product=require("./product")
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, this is a simple API!");
});
app.get("/product", (req, res) => {
  res.send(product);
});
const port = process.env.PORT || 5000;
app.listen(port, 
  console.log(`server is running on port ${port}`));
