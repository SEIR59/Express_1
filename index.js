const express = require('express')
const app = express();

port = 3000

app.listen(port, () => {
    console.log("app is running on port: ", port);
  });

app.get('/greeting', (req,res) =>{
    res.send("hello mate")
})

app.get('/greeting/:name', (req,res) =>{
    res.send(`hello ${req.params.name}`)
})


//Tip Calculator 

app.get('/tip/:total/:tipPercentage', (req,res) =>{
    let total = Number(req.params.total)
    let tipPerc = Number(req.params.tipPercentage)
    let sum = total * (tipPerc/100)
    res.send(`The tip is ${sum}`)
})

//Magic 8 ball

app.get('/magic/:phrase', (req,res) =>{

    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    randomResponse = Math.floor(Math.random() * responses.length)

    res.send(`<h1> You asked ${req.params.phrase} and the magic 8 ball replied:<br>${responses[randomResponse]}</h1>`)
})

//take one down and pass it around

app.get('/', (req,res) => {
    res.send(`<h1> 99 Bottles of beer on the wall <br> <a href="/98">testing</a></h1>`)
})

// app.get('/:num', (req,res) =>{
//     res.send(`${req.params.num} Bottles of beer on the wall`)
// })

app.get('/:number_of_bottles', (req, res) =>{
    if(req.params.number_of_bottles === '0'){
        res.send(`<h1><a href="/"> Start Over </a></h1>`)
    } else {
        res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall <br><a href= ${req.params.number_of_bottles - 1}>Take one down, pass it around</a></h1>`)
    }
})
