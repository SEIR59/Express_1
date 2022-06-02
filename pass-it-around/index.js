const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
	res.send(
		`<h1> 99 Glasses of milk on the wall <a href="/98">take one down pass it around</a> </h1>`
	)
})

app.get('/:number_of_glasses', (req, res) => {
	let glass = req.params.number_of_glasses

	if (`${glass}` === '0') {
		res.send('<h1> <a href=' / '> Start Over </a></h1>')
	} else {
		res.send(
			`<h1> ${glass} Glasses of milk on the wall <a href= /${glass - 1}> Take one down, pass it around</a></h1>`
		)
	}
})

app.listen(port, () => {
	console.log(`Listening on port ${port}!!`)
})