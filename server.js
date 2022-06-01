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


// Magic 8 Ball

app.get('/magic/:question', (req, res) => {
	question = req.params.question
    const randomResponses = [
			'It is certain',
			'It is decidedly so',
			'Without a doubt',
			'Yes definitely',
			'You may rely on it',
			'As I see it yes',
			'Most likely',
			'Outlook good',
			'Yes',
			'Signs point to yes',
			'Reply hazy try again',
			'Ask again later',
			'Better not tell you now',
			'Cannot predict now',
			'Concentrate and ask again',
			"Don't count on it",
			'My reply is no',
			'My sources say no',
			'Outlook not so good',
			'Very doubtful',
		]
        randomResponseIndex = Math.floor(Math.random() * randomResponses.length)
    
	res.send(`<h1>${question}... ${randomResponses[randomResponseIndex]}</h1>`)

})


app.listen(3000, () => {
	console.log('Listening on port 3000!!!')
})