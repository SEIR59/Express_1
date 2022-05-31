const express = require("express")
const app = express()

const port = 3000

app.listen(port, () => {
    // console.log("is the port active?")
})

app.get("/greeting/:name", (req, res) => {
    res.send("Hello stranger!")
})

