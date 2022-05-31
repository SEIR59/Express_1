const express = require('express');
const app = express();



const port = 3000;

app.listen(port, (req,res) => { 
    console.log("working" )
  
})


//===== GREETINGS =====//
app.get('/greeting/:name',(req,res) => {
    console.log(req.params)
    res.send("Hello, It's so great to see you! " + req.params.name)
})


//===== Tip Calculator =====//
app.get('/tip/:total/:tipPercentage',(req,res) => {

let tip = parseInt(req.params.total)*(parseInt(req.params.tipPercentage)/100)

res.send(tip.toString())
})

//===== Magic 8 ball =====//



app.get('/magic/:question/',(req,res) => {
    
    const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    
    let random = Math.floor(Math.random()*(response.length))
    
    res.send(req.params.question + "? "  + "\n"+ response[random])
    })

    
