const express = require('express')
const app =express()
const port = 3000;
app.get('/greeting/:name', (req, res)=>{
    res.send(`hello, ${req.params.name}` )
})
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let tip = (tipPercentage / 100) * total
    res.send(`${tip}`)
    })


    app.get('/magic/:question',(req, res)=>{
        let question= req.params.question
        let resp = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    
    res.send(`${question} <h1>${resp[Math.floor(Math.random() * resp.length)]}</h1>`)
    })
app.listen(port, () => {
    console.log('app is running on port: ', port);
});
