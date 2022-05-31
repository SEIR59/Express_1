const express = require('express')
const app = express()
const port = 3000
const magicArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting', (req, res) => {
    res.send(`Hello, Stranger!`)
})


app.get('/greeting/:name', (req, res) => {
    res.send(`Hey ${req.params.name}, it's so great to see you!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Your tip is ${parseInt(req.params.total)/parseInt(req.params.tipPercentage)} dollars`)
})

app.get('/magic/:question', (req, res) => {
    res.send(`${req.params.question} <h1>${magicArray[Math.floor(Math.random() * magicArray.length)]}</h1>`)
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

