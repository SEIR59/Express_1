const express = require('express')
const app = express()
const port = 3000;
// const res = require('express/lib/response')

// GREETINGS
app.get('/greeting/', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})


app.get('/greeting/:name/', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

app.listen(port, () => {
    console.log("Listening to port 3000!!!")
})