const express = require('express')
const app = express()
const port = 3000

app.listen(port,()=>{
    console.log('listening to port 3000')
})

app.get('/greeting/:name', (req,res) => {
    res.send(`Hello there ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req,res) => {
    tipPercentage = Number(req.params.total) * Number(req.params.tipPercentage) / 100
    res.send(`The tip is ${tipPercentage}`)
    
})

app.get('/magic/:question', (req, res) => {
    let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    res.send(`${req.params.question}: <h1>${responses[Math.floor(Math.random() * responses.length)]}</h1>`)
})

