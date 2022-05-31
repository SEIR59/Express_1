const express = require('express');
const res = require('express/lib/response');
const app = express();

const port = 3002;

app.listen(port, () => {
	console.log('app is running on port: ', port);
});

app.get("/greeting/:name", (request, response) => {
    const name = request.params.name
    response.send(`Hi, ${name}`)
})

app.get('/tip/:total/:tipPercentage', (request, response) => {
    response.send(`${request.params.total*request.params.tipPercentage/100}`)
})

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question' , (req, res) => {
    let question = req.params.question
    res.send(`${question}? Magic8Ball: <h1>${responses[Math.floor(Math.random()*responses.length)]}</h1>` )
})