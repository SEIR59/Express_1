
const express = require('express')

const app = express()

const port = 3000


app.listen(3000, () => {
    console.log("app is running on port: ", port);
})
// greetings

app.get("/greeting/:name", (req, res) => {
    res.send(`Hi there , ${req.params.name}`);

})

// tip calculator

app.get('/tip:total/:tipPercentage', (req, res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let sum = total * (tipPercentage / 100)
    res.send(`${sum}`)

})

// magic 8 ball


app.get("/magic/:question", (req, res) => {
    let question = req.params.question

    let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    res.send(`Question: ${question} <h1>${response[Math.floor(Math.random()*response.length)]}</h1>`)

})
