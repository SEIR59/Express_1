const express = require('express')
const app = express()

app.get("/greeting/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}. How the heck are you?`)
})

app.listen(3000, () => {
    console.log("Working")
})