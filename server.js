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

app.listen(port, () => {
    console.log("Listening to port 3000!!!")
})