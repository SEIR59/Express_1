const express = require('express')
const app = express()

const port = 3000

app.get('/greeting/:name' , (req,res)=>{
    res.send(`Hello, ${req.params.name}!`)
})

app.get('/tip/:total/:tipPercentage', (req,res)=>{
    res.send(`${req.params.total*req.params.tipPercentage/100}`)
})




app.listen(port, ()=>{
    console.log('in the port')
})