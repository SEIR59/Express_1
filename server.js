const express = require('express')
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


app.listen(port, () => {
    console.log('app is running on port: ', port)
})