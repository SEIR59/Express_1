// Pulling express modules
const express = require('express')

// Creating a server
const app = express()

// Listening for the port
port = 3000 
app.listen(port, () => {
    console.log("Using port: ", port)
})

// Making a route for greeting
app.get("/greeting/:name", (request, response) => {
    const personName = request.params.name
    response.send(`${personName}! It's so great to see you!`)
})

// Making a tip calculator
app.get("/tip/:total/:tipPercentage", (request, response) => {
    const bill = Number(request.params.total)
    const tip = Number(request.params.tipPercentage)
    let tipAmount = Number(tip/bill*100)
    response.send(`Tip Amount: ${tipAmount}`)
})

// Magic 8 Ball
app.get("/magic/:question", (request, response) => {
    const randomResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randomResponse = randomResponses[Math.floor(Math.random()*randomResponses.length)]
    let question = String(request.params.question)
    response.send(`<h1>${question}: ${randomResponse}</h1>`)
})