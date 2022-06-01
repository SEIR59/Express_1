const express = require("express")
const app = express()

const port = 3000

// Greetings

app.get('/greeting/:name', (req, res) => {
	name = req.params.name
	res.send(`Hello, ${name}`)

})


//Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
	// console.log("this is working")
	let total = parseInt(req.params.total)
	let tipPercentage = parseInt(req.params.tipPercentage)
	let tipTotal = total*(tipPercentage / 100)
	res.send(`The tip should be ${tipTotal}`)
})