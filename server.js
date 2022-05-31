const express = require('express');
console.log(express)

const app = express();

// Greetings

app.get('/greeting', (req, res) => {
        res.send("Hello, stranger.");
});

app.listen(3000);

app.get('/greeting/:name', (req, res) => {
    let myName = req.params.name
    res.send(` Hey what's up, ${myName}!`)

});

// Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
        let tipPercentage = Number(req.params.total) * Number(req.params.tipPercentage) / 100
        res.send(`The tip amount is ${tipPercentage}`)
});


