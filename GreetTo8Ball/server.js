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

//Magic 8 ball
const eightBallArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
app.get('/magic/:phrase', (req, res) => {
    let newRand = Math.floor(Math.random() * eightBallArray.length);
    let thePhrase = req.params.phrase;
    let replaced = thePhrase.replace("%20", " ");
    res.send(`${replaced}: <h1>${eightBallArray[newRand]}</h1>`);
});