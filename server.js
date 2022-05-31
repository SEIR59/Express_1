const express = require('express');
const app = express();

const port = 3000;

app.get('/greeting/:name', (req, res) => {
    let person = req.params.name
    
    res.send("Hello There, " + person)
})


app.listen(port, () => {
	console.log('app is running on port: ', port)
});