const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors);
app.use(express.json());

app.listen(5005, () => {
  console.log("app running on port 5005");
});
