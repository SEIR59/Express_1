const express = require('express')
const app = express()
const port = 3000

app.get('/greeting', (req, res) => {
    res.send(`Hello, Stranger!`)
})


app.get('/greeting/:name', (req, res) => {
    res.send(`Hey ${req.params.name}, it's so great to see you!`)
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})