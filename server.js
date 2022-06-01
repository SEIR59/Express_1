const express = require('express')
const app = express()

app.get("/greeting/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}. How the heck are you?`)
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`The total bill is $${req.params.total} and a 20% tip will be $${req.params.tipPercentage}.`)
})

app.listen(3000, () => {
    console.log("Working")
})