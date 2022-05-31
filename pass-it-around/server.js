const express = require("express");
const { download } = require("express/lib/response");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`99 Bottles of beer on the wall"
  <br />
    <a href="/98">take one download, pass it around</a>`);
});

app.get("/:number_of_bottles", (req, res) => {
  let numBottles = req.params.number_of_bottles;
  let numMinus1 = Number(numBottles) - 1;
  if (numBottles === "0") {
    res.send(`0 Bottle of beer on the wall"
    <br />
    <a href="/">Start Over</a>`);
  } else {
    res.send(`${numBottles} Bottles of beer on the wall"
    <br />
    <a href="/${numMinus1}">take one download, pass it around</a>`);
  }
});

// bugs
// app.get("/:number_of_bugs", (req, res) => {
//     let numBugs = req.params.number_of_bugs;
//     let numMinus1 = Number(numBugs) - 1;

//   res.send(`${numBugs} little bugs in the code"
//       <br />
//       <a href="/${numMinus1}">take one down</a>`);

//   });

app.listen(port, () => {
  console.log("port: " + port);
});
