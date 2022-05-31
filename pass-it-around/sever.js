const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("99 bottles on the wall");
  res.write(`<br/>  <a href='/98'>take one down, pass it around</a>`);
  res.end();
});

app.get("/0", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write(`0 bottles on the wall`);
  res.write(`<br/> <a href= '/'>Go back to mian page</a>`);
  res.end();
});

app.get("/:number_of_bottles", (req, res) => {
  let next = parseInt(req.params.number_of_bottles) - 1;
  res.setHeader("Content-type", "text/html");
  res.write(`${req.params.number_of_bottles} bottles on the wall`);
  res.write(`<br/>  <a href= '/${next}'>take one down, pass it around</a>`);
  res.end();
});

app.listen(port, () => {
  console.log("app is running on port 3001", port);
});
