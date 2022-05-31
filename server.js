const expr = require("express")
const res = require("express/lib/response")
const app = expr()

const port = 3000

app.get("/", (req, res) => {
    res.send("This is the default route of this project!")
})

app.get("/greeting/:name", (req, res) => {

    // get one of 4 greetings
    let possibleGreetings = [`Hello, ${req.params.name}`, `What's up, ${req.params.name}`, `${req.params.name}! It's so great to see you!`, `Wow! Hello there, ${req.params.name}`]

    // get random greeting from array
    let randomGreeting = possibleGreetings[Math.floor(Math.random() * possibleGreetings.length)]

    // send response to server
    res.send(`${randomGreeting}`)
})


app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})