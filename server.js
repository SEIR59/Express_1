const express = require('express');
const app = express();


app.get('/greeting/', (req, res) => {
    res.send('Hello, stranger');
});
app.get('/greeting/:name', (req, res) => {
    res.send('Hello, ' + req.params.name);
});

app.listen(3000, () => {
    console.log('listening');
});

//localhost:3000/gretting/:name
