const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  const height = Number(req.body.height);
  const weight = Number(req.body.weight);
  console.log(`height ${height}, weight: ${weight}`);

  const result = weight / height;

  res.send(`Your BMI is: ${result}`);
});

app.listen(2000, () => console.log("Server start at port 2000"));
