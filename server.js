/*
## Greetings

2. Make a route `'/greeting'` that sends a generic greeting to the screen like "Hello, stranger".

3. Give the `greeting` route a param `/:name`

4. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).
*/

const express = require('express');
const app = express();

const port = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send(`${req.params.name}! It's so greate to see you!`)
})



/*
## Tip Calculator

2. Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.

3. When hitting the route, the page should *display how much your tip will be* based on the total amount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).
*/

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let billTotal = Number(req.params.total)
    let tipPercent = Number(req.params.tipPercentage)
    let calculatedTip = billTotal * (tipPercent/100);
    let tipBillTotal = billTotal + calculatedTip;
    res.send(`The total bill is $${billTotal}, the tip percentage is ${tipPercent}%, the calculated tip is $${calculatedTip}, and the overall total is $${tipBillTotal}`)
})

app.listen(port, () => {
	console.log('app is running on port: ', port)
});