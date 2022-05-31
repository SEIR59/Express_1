const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("app is running on port: ", port);
});

// GREETINGS
app.get("/greeting/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// TIP CALCULATOR
app.get("/tip/:total/:tipPercentage", (req, res) => {
  tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100);
  res.send(
    `A ${req.params.tipPercentage}% tip of $${req.params.total} is $${tip}.`
  );
});

let eightBall = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// MAGIC 8 BALL
app.get("/magic/:question", (req, res) => {
  let answer = eightBall[Math.floor(Math.random() * eightBall.length)];
  res.send(`${req.params.question} <h1>${answer}</h1>`);
});

// TAKE ONE DOWN AND PASS IT AROUND
app.get("/", (req, res) => {
  res.send(
    `99 Bottles of beer on the wall. <a href="/98">Take one down pass it around.</a>`
  );
});

app.get("/:numberOfBottles", (req, res) => {
  let numberOfBottles = req.params.numberOfBottles;
  if (numberOfBottles > 0) {
    res.send(
      `${numberOfBottles} Bottles of beer on the wall. <a href="/${
        numberOfBottles - 1
      }">Take one down pass it around.</a>`
    );
  } else {
    res.send(`<a href="/">Start over and drink more beer!</a>`);
  }
});
