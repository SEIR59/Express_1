// Pulling express modules
const express = require('express')

// Creating a server
const app = express()

// Listening for the port
port = 3000 
app.listen(port, () => {
    console.log("Using port: ", port)
})

