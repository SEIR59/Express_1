const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`linked`)
}) 

// Greetings
app.get(`/greeting/:name`, (req, res) => {
    res.send(`Greeting ${req.params.name}`)
})

// Tip calculator
app.get(`/tip/:bill/:pct`, (req, res) => {
    const pct = req.params.pct
    const bill = req.params.bill
    let tip = bill * pct / 100
    res.send(`Heres your tip ${tip}`)
})

// Magic 8 Ball
app.get(`/magic/:question`, (req, res) => {
    const magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    result = magic8[Math.floor(magic8.length * Math.random())]
    // console.log(result)
    res.send(`<h1>${result}</h1>`)
}) 

// Take one Down and Pass it Around
app.get(`/`, (req, res) => {
    let bottles = 99
    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/${bottles-1}">Take one down, pass it around</a>
    `)
})

app.get(`/:number_of_bottles`, (req, res) => {
    const number = parseInt(req.params.number_of_bottles)
    // res.send(`
        // <h1>${number} Bottles of beer on the wall</h1>
        number > 0 ? res.send(`
            <h1>${number} Bottles of beer on the wall</h1>
            <a href="/${(number-1)}">Take one down, pass it around</a>
            `) : res.send(
            `<h1>${number} Bottles of beer on the wall</h1>
            <a href="/">Start over</a>
            `)
        // `)
})