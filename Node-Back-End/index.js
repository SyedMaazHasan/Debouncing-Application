const express = require("express");
const app = express();
const fakeData = require("./data");
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/comments", (req, res) => {
  console.log("inside", req.body);
  const userInput = req.body.input;
  const result = fakeData.filter((obj) => {
    return obj.body.includes(userInput);
  });
  res.send(result);
});

//for production
app.listen(4000, () => {
  console.log("listening on port ", 4000);
});
