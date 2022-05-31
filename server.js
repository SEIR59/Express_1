const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`linked`)
}) 

app.get(`/greeting/:name`, (req, res) => {
    res.send(`Greeting ${req.params.name}`)
})