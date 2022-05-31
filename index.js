const express = require("express")
const app = express()

const port = 3000

app.listen(port, () => {
    // console.log("is the port active?")
})

app.get("/greeting/:name", (req, res) => {
    let name = req.params.name
    res.send(`Hello ${name}! It's so nice to meet you.`)
})


app.get("/tip/:total/:tipPercentage", (req, res) => {
// console.log("this is working")
let total = parseInt(req.params.total)
let tipPercentage = parseInt(req.params.tipPercentage)
let tipTotal = (tipPercentage/100)*total

res.send(`The tip should be ${tipTotal}`)
})