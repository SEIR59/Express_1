const express = require('express');
const app = express();
const port = 3000;

//-----------------------------
//         Greetings
//-----------------------------

// app.get('/greeting/:name', (req, res) => {
//     let person = req.params.name
    
//     res.send("Hello There, " + person)
// })



//-----------------------------
//       Tip Calculator 
//-----------------------------

// app.get('/tip/:total/:percentage', (req, res) => {
//     let subtotal = req.params.total
//     let percent = req.params.percentage

//     let tip = subtotal * (percent/100)
//     let total = tip + subtotal

//     res.send("Your total with tip will be " + total)
// })


//-----------------------------
//       Magic 8-ball 
//-----------------------------

const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    
    let ballSays = response[Math.floor(Math.random() * response.length)];

    res.send(ballSays)
})














app.listen(port, () => {
	console.log('app is running on port: ', port)
});