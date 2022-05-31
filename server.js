const express = require("express");
const app = express();
const port = 3000;

// app.get("/calc/:num1/:num2", (req, res) => {
//     let sum = parseInt(req.params.num1) + parseInt(req.params.num2);
//     res.send(`${req.params.num1} + ${req.params.num2} is ${sum}`);
//   });

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello there , ${req.params.name}`);
});

app.get("/tip/:total/:percentage", (req, res) => {
  let total = parseFloat(req.params.total);
  let percentage = parseFloat(req.params.percentage) / 100;
  let tip = total * percentage;
  res.send(`The tip is : ${tip}`);
});

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

app.listen(port, () => {
  console.log("app is running on port", port);
});
