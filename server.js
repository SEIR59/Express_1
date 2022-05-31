// Pulling express modules
const express = require('express')

// Creating a server
const app = express()

// Listening for the port
port = 3000 
app.listen(port, () => {
    console.log("Using port: ", port)
})

// Making a route for greeting
app.get("/greeting/:name", (request, response) => {
    const personName = request.params.name
    response.send(`${personName}! It's so great to see you!`)
})
