const express = require('express')
const app = express()
const port = 3000

app.listen(port,()=>{
    console.log('listening to port 3000')
})

app.get('/greeting/:name', (req,res) => {
    res.send(`Hello there ${req.params.name}`)
})