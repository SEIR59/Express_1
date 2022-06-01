const express = require("express")

const app = express()

app.get("/greeting/:name", (req, res) => {
  res.send("what's up " + req.params.name)
})

app.listen(3000, () => {
  console.log("success")
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let tip = parseInt(req.params.total) / parseInt(req.params.tipPercentage)
  res.send("The tip will be " + tip)
})

app.get("/magic/:question", (req, res) => {
  const responses = [
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
  ]
  let randomResponse = responses[Math.floor(Math.random() * responses.length)]
  let question = String(req.params.question)
  res.send(`<h1>${question}<h1>${randomResponse}<h1>`)
})
// how am i not cool? am i cool
// My sources say no 
// funny 