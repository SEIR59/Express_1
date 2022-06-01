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

/*
## Magic 8 Ball

2. Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.

3.  So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) he should have return to him his question AND a random Magic 8 ball response (see the array below) on the  screen.

4. We can't use spaces in the url, so we use `%20` to express a space in the url.

5. So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the  screen.
- Send the magic 8 ball response back between html `<h1>` tags
- Use this array of Magic 8 ball responses.....

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```
*/

app.get('/magic/:question', (req, res) => {
    const magicArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    let answer = magicArr[Math.floor(Math.random()*magicArr.length)]
    res.send(`${req.params.question}? \n ${answer}`)
})


app.listen(port, () => {
	console.log('app is running on port: ', port)
});