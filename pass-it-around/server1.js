const express = require('express')

const app = express()

const port = 3000


app.listen(3000, () => {
    console.log("app is running on port: ", port);
})

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall <a href="/98"> take one down pass it around </a> </h1>`)
})

app.get('/:bottles', (req, res) => {
    let bottle = req.params.bottles
    if(bottle <= 0){
        res.send('<h1> <a href="http://localhost:3003/"> Start Over </a></h1>')
    } else {
        res.send(`<h1> ${bottle} bottles of beer on the wall <a href= /${bottle - 1}> Take one down, pass it around </a> </h1>`)
    }
})

