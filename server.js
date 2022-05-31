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

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})