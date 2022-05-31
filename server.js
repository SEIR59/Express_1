const express = require("express")

const app = express()

app.get("/greeting/:name", (req, res) => {
  res.send("what's up " + req.params.name)
})

app.listen(3000, () => {
  console.log("success")
})

app.get("/tip/:total/:tipPercentage", (req, res) => {
    let tip = parseInt(req.params.total) / parseInt(req.params.tipPercentage)
    res.send("The tip will be " + tip)
})
