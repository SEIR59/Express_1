const express = require("express")
const app = express();
app.get('/greeting/:name', (req, res) => {
    console.log(req)
    // console.log(req.params)
    res.send('hello' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req)
    // console.log(req.params)
    let decimal = req.params.tipPercentage / 100 
    let tip = req.params.total * decimal
    res.send('tip: ' + tip)
})

const magicAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/magic/:question', (req, res) => {
    let x = Math.floor(Math.random() * magicAnswers.length);
    res.send(`question:   ${req.params.question} <h1> answer: ${magicAnswers[x]}</h1>`)
    
})





app.listen(8000, () => {
    console.log("Listening on port 8000!!!")
})