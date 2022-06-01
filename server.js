const expr = require('express');

const app = expr();

app.listen(3000);

//Greeting express app created
app.get('/greeting/:name', (req, res) => {
    let name = req.params.name;
    res.send(`What's up ${name}, it's great to see you!`);
});

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = parseFloat(req.params.total);
    let tipPercentage = parseFloat(req.params.tipPercentage);
    let theTip = total * (.01 * tipPercentage);
    res.send(`${theTip}`);
});