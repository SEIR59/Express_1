const express = require("express");
const app = express();
const port = 3000;
// Greetings
app.get("/greeting/:name", (req, res) => {
  res.send("Hello, " + req.params.name);
});
// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  let result =
    (Number(req.params.total) * Number(req.params.tipPercentage)) / 100;
  res.send(`${result}`);
});

app.listen(port, () => {
  console.log("port: " + port);
});
