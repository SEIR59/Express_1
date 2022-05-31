const express = require("express")
const app = express()

const port = 3000

app.listen(port, () => {
    // console.log("is the port active?")
})

app.get("/greeting/:name", (req, res) => {
    let name = req.params.name
    res.send(`Hello ${name}! It's so nice to meet you.`)
})


app.get("/tip/:total/:tipPercentage", (req, res) => {
// console.log("this is working")
let total = parseInt(req.params.total)
let tipPercentage = parseInt(req.params.tipPercentage)
let tipTotal = (tipPercentage/100)*total

res.send(`The tip should be ${tipTotal}`)
})


app.get("/magic/:question", (req, res) => {
    let question = req.params.question
    
    let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    // Math.floor(math.random*response.length)

    res.send(`Question: ${question} <h1>${response[Math.floor(Math.random()*response.length)]}</h1>`)


})