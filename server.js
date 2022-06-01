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
//Magic 8 ball
const magic8 = [
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
app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res) => {
  let ran = Math.floor(Math.random() * magic8.length);
  res.send(`${magic8[ran]}`);
});

// Fibonacci

app.get("/fibonacci/:num", (req, res) => {
  const num = Number(req.params.num);
  let a = 0;
  let b = 1;
  let c = a + b;
  if (num === a || num === b) {
    res.send("Very good. It is Fibonacci.");
    return;
  }

  while (c <= num) {
    if (c === num) {
      res.send("Very good. It is Fibonacci.");
      return;
    }
    a = b;
    b = c;
    c = a + b;
  }

  res.send("I can tell this is not a fibonacci number.");
});

// Axios
// Use axios within node to make a request to jservice.io and get a random trivia question and log the JSON in terminal.
const axios = require("axios");
axios({
  method: "get",
  url: "http://jservice.io/api/random",
}).then(function (response) {
  console.log(response.data);
});
// Use express to make a route that will display a random trivia question and its answer
app.get("/jservice", (req, res) => {
  axios.get("http://jservice.io/api/random").then((response) =>
    res.send({
      question: response.data[0].question,
      answer: response.data[0].answer,
    })
  );
});
// Make a route that will deliver jservice results for one of either the clues, random, categories, category API endpoints, depending on user input.
app.get("/jservice/:result", (req, res) => {
  const result = req.params.result;
  axios.get(`http://jservice.io/api/${result}`).then((response) => {
    res.send(response.data);
  });
});

app.listen(port, () => {
  console.log("port: " + port);
});
