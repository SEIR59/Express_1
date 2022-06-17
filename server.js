const express =  require('express')
const app = express()
const port = 2000

app.listen(port, () => {
    console.log('the port is running on ' + port)
})

app.get("/greeting/:name", (req, res) => {
    res.send(req.params.name + "! Great to see you!")
})

app.get("/tip/:total/:tipPercent", (req, res) => {
    let total = parseFloat(req.params.total)
    let tipPerc = parseFloat("." + req.params.tipPercent)
    let tip = total * tipPerc
    res.send("the tip should be $" + tip)
})

//magic 8ball below
const eight = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:phrase", (req, res) => {
    let random = eight[Math.floor(Math.random()*eight.length)]
    console.log(random)
    res.send(" " + random)
})

//take one down pass it around

