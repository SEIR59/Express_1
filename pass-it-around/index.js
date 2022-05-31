const express = require("express");
const app = express();

const port = 3000;

const verse = [
  ` bottles of beer on the wall, `,
  ` bottles of beer!`,
  ` Take one down, pass it around... `,
];

app.get("/", (req, res) => {
  let link = `<a href="http://localhost:3000/98">${verse[2]}</a>`;
  res.send(`99 ${verse[0]} 99 ${verse[1]} <br>${link}`);
});

app.get("/:number_of_bottles", (req, res) => {
  if (req.params.number_of_bottles > 1) {
    let numBottles = req.params.number_of_bottles
    let link = `<a href="http://localhost:3000/${numBottles -1}">${verse[2]}</a>`
    res.send(`${numBottles}${verse[0]}${numBottles}${verse[1]} <br>${link} `)
  }else if (req.params.number_of_bottles == 1) {
    let numBottles = req.params.number_of_bottles
    let link = `<a href="http://localhost:3000/${numBottles -1}">${verse[2]}</a>`
    res.send(`${numBottles} bottle of beer on the wall, ${numBottles} bottle of beer! <br>${link} `)
  } else {
    res.send(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more... <br>
     <a href="http://localhost:3000/">Restart</a>`)
  }
});

app.listen(port, () => {
  //   console.log("is the port active?")
});
