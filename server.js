const express = require('express');
const { get } = require('http');
const app = express()
const port = 3000;
// const res = require('express/lib/response')

// GREETINGS
app.get('/greeting/', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})


app.get('/greeting/:name/', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

// TIP CALCULATOR
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    billTotal = Number(req.params.total) * Number(req.params.tipPercentage * .01)
    res.send(`Here is the tip amount: ${billTotal}`)
})

// Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    res.send(`${req.params.question}<h1> ${response[Math.floor(Math.random() * response.length)]}</h1>`)
})
app.listen(port, () => {
    console.log("Listening to port 3000!!!")
})