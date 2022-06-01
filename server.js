const express = require("express")
const app = express()

const port = 3000

// Greeting

app.get('/greeting/:name', (req, res) => {
	name = req.params.name
	res.send(`Hello, ${name}`)

})
