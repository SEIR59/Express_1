const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`linked`)
}) 

app.get(`/greeting/:name`, (req, res) => {
    res.send(`Greeting ${req.params.name}`)
})

app.get(`/tip/:bill/:pct`, (req, res) => {
    const pct = req.params.pct
    const bill = req.params.bill
    let tip = bill * pct / 100
    res.send(`Heres your tip ${tip}`)
})