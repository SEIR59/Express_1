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

