const express = require("express");
const app = express();
const port = 3000;

// axios bonus
const axios = require("axios");

app.get("/axios", (req, res) => {
  axios.get("http://jservice.io/api/random").then((response) => {
    res.setHeader("Content-type", "text/html");
    res.write(`${response.data[0].question}`);
    res.write(`</br></br>${response.data[0].answer}`);
    res.end();
  });
});

// greeting problem
app.get("/greeting/:name", (req, res) => {
  res.send(`Hello there , ${req.params.name}`);
});

// tip
app.get("/tip/:total/:percentage", (req, res) => {
  let total = parseFloat(req.params.total);
  let percentage = parseFloat(req.params.percentage) / 100;
  let tip = total * percentage;
  res.send(`The tip is : ${tip}`);
});

// magic 8
app.get("/magic/:question", (req, res) => {
  let answerArr = [
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
  let random = Math.floor(Math.random() * 20);
  let answer = answerArr[random];

  res.setHeader("Content-type", "text/html");
  res.write(`Your question is : ${req.params.question}`);
  res.write(` <h1>The answer is :  ${answer} </h1>`);
  res.end();
});

// Fibonacci

app.get("/fibonacci/:num", (req, res) => {
  function checkFib(num, second = 1, first = 0) {
    if (num > second) {
      return checkFib(num, second + first, second);
    } else if (num === second) {
      return true;
    }
    return false;
  }
  let number = parseInt(req.params.num);
  let answer = checkFib(number, 1, 0);
  console.log(answer);
  answer
    ? res.send("Very good. It is Fibonacci.")
    : res.send("I can tell this is not a fibonacci number.");
});

app.listen(port, () => {
  console.log("app is running on port", port);
});
