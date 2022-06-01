const express = require('express')
const app = express()

app.get("/greeting/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}. How the heck are you?`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`The total bill is $${req.params.total} and a 20% tip will be $${req.params.tipPercentage}.`)
})

const magicAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:question", (req, res) => {
    // Question will be typed in the URL, set question var to param
    let question = req.params.question
    res.send(`${question}? <h1>${magicAnswers[Math.floor(Math.random() * magicAnswers.length)]}</h1>`)
})



app.listen(3000, () => {
    console.log("Working")
})