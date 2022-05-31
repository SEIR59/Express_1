const express = require('express')
const app = express()

const port = 3000
const magic8Responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting/:name' , (req,res)=>{
    res.send(`Hello, ${req.params.name}!`)
})

app.get('/tip/:total/:tipPercentage', (req,res)=>{
    res.send(`${req.params.total*req.params.tipPercentage/100}`)
})

app.get('/magic/:question' , (req,res)=>{
    let question = req.params.question
    res.send(`Your question: ${question}? The ball says: <h1>${magic8Responses[Math.floor(Math.random()*magic8Responses.length)]}</h1>`)
})


app.listen(port, ()=>{
    console.log('in the port')
})