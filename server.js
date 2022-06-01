const express = require('express');
const app = express();


// app.get('/greeting/', (req, res) => {
//     res.send('Hello, stranger');
// });
// app.get('/greeting/:name', (req, res) => {
//     res.send('Hello, ' + req.params.name);
// });

// app.listen(3000, () => {
//     console.log('listening');
// });

//localhost:3000/gretting/:name


//TIP CALCULATOR
// app.get('/tip/:total/:tipPercentage', (req, res)=> {
//     res.send(`Tip is ${parseInt(req.params.total) / parseInt(req.params.tipPercentage)}`)

// })

// app.listen(3000, () => {
//     console.log('listening')
// })


//MAGIC 8 BALL

app.get('/magic/:phrase', (req,res) =>{

    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    randomResponse = Math.floor(Math.random() * responses.length)

    res.send(`You asked the magic ball ${req.params.phrase} and replied:<br>${responses[randomResponse]}`)
})


app.listen(3000, () => {
    console.log('listening');
});