const express = require('express')
const app = express()

const port = 3000
const magic8Responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting/:name' , (req,res)=>{
    res.send(`Hello, ${req.params.name}!`)
})

app.get('/tip/:total/:tipPercentage', (req,res)=>{
    res.send(`${req.params.total*req.params.tipPercentage/100}`)
})

app.get('/magic/:question' , (req,res)=>{
    let question = req.params.question
    res.send(`Your question: ${question}? The ball says: <h1>${magic8Responses[Math.floor(Math.random()*magic8Responses.length)]}</h1>`)
})

//fibonacci
app.get('/fibonacci/:num' , (req,res)=>{
    let fibNums = [0,1]
    let num = Number(req.params.num)
    while (fibNums[fibNums.length-1] < num){
        let f1 = fibNums.length - 1
        let f2 = fibNums.length - 2
        fibNums.push(fibNums[f1]+fibNums[f2])
    }
    //console.log(fibNums)
    
    let response
    fibNums.includes(num) ? response = `${num} :this is a fibonnaci number!` : response = `${num} is not a fibonnaci number....`
    res.send(response)
})

app.listen(port, ()=>{
    console.log('in the port')
})