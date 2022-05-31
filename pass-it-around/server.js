const express = require('express')
const app = express()

let port = 3001
app.listen(port, () => {
    console.log("Using Port: ", port)
})

let bottles = 99
app.get("/", (request, response) => {
    let next = bottles - 1
    response.send(`<p>${bottles} Bottles of beer on the wall</p>\n<a href="/${next}">Take one down, pass it around</a>`)
})

app.get("/:number_of_bottles", (request, response) => {
    let bottles = Number(request.params.number_of_bottles)
    if (bottles === 0) {
        response.send(`<a href="/">Start over</a>`)
    }
    else {
        response.send(`<p>${bottles} Bottles of beer on the wall</p>\n<a href="/${bottles - 1}">Take one down, pass it around</a>`)
    }
})