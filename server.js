const express = require('express');
const app = express();

const port = 3002;

app.listen(port, () => {
	console.log('app is running on port: ', port);
});

app.get("/greeting/:name", (request, response) => {
    const name = request.params.name
    response.send(`Hi, ${name}`)
})

app.get('/tip/:total/:tipPercentage', (request, response) => {
    response.send(`${request.params.total*request.params.tipPercentage/100}`)
})