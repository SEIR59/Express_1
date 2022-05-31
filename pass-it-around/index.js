const express = require('express')
const { get } = require('express/lib/response')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log("hello")
})


app.get('/', (req,res) => {
    res.send(`<h1> 99 Bottles of beer on the wall <a href="/98">take one doen pass it around</a> </h1>`)
})


app.get('/:number_of_bottles', (req, res) =>{
    let bottle = req.params.number_of_bottles
    // res.send(`${bottle} 'Bottles of beer on the wall`)
    if(`${bottle}`=== '0'){
        res.send("<h1> <a href="/"> Start Over </a></h1>")
    } else {
        res.send(`<h1> ${bottle} 'Bottles of beer on the wall <a href= /${bottle - 1}> Take one down, pass it around</a></h1>`)
    }
    
})