const expr = require("express")
const res = require("express/lib/response")
const app = expr()

const port = 3000

// default webpage.
app.get("/", (req, res) => {
    res.send("This is the default route of this project!")
})

// Greetings
// greeting route that will display a random greeting.
app.get("/greeting/:name", (req, res) => {

    // get one of 4 greetings
    let possibleGreetings = [`Hello, ${req.params.name}`, `What's up, ${req.params.name}`, `${req.params.name}! It's so great to see you!`, `Wow! Hello there, ${req.params.name}`]

    // get random greeting from array
    let randomGreeting = possibleGreetings[Math.floor(Math.random() * possibleGreetings.length)]

    // send response to server
    res.send(`${randomGreeting}`)
})

// Tip Calculator - 
//gets the requested tip percentage of a given total.
app.get("/tip/:total/:tipPercentage", (req,res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    // calculate the tip percentage and make sure it rounds correctly. No leading numbers!
    let tip = (tipPercentage / total) * 100
    tip = Math.round((tip + Number.EPSILON) * 100) / 100

    res.send(`${tip}`)
})

// Magic 8 Ball -
//
app.get("/magic/:question", (req, res) => {
    let question = req.params.question
    // all possible responses magic 8 ball can have
    const possibleResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    // get a random response from the array
    let eightBallResponse = possibleResponse[Math.floor(Math.random() * possibleResponse.length)]

    res.send(`
        ${question}
        <h1>${eightBallResponse}</h1>
    `)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})