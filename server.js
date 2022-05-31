const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 3000

// ******** GREETING ***********

app.get('/greeting/:name', (req, res) => {
    name = req.params.name
    res.send(`Hello, ${name}`)
})

// ******** TIP CALCULATOR *********

app.get('/tip/:total/:tipPercentage', (req, res) => {
    grandTotal = Number(req.params.total) - (Number(req.params.total) *( Number(req.params.tipPercentage) * .01))
    res.send(`Your total before tax was ${req.params.total}. The tip percentage is ${req.params.tipPercentage}. Your grand total after tax is ${grandTotal}`)
})


// ******** MAGIC 8 BALL ********

app.get('/magic/:question', (req, res) => {
    responseArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    randomResponse = responseArr[Math.floor(Math.random() * responseArr.length)]
    res.send(`<h1> ${req.params.question}? --> ${randomResponse}`)
})


// ******** FIBONACCI ********

app.get('/:number', (req, res) => {
    num = Number(req.params.number)
    const findPerfectSquare = (x) => {
        for (let i = 1; i < x; i++){
            if (x / i === i) return true
        }
        return false
    }
    findPerfectSquare(5*num*num + 4) || findPerfectSquare(5*num*num - 4) ? res.send(`Very good. ${num} is a Fibonacci.`) : res.send(`I can tell ${num} is not a Fibonacci number`)
})



app.listen(port, () => {
    console.log('app is running on port: ', port)
})