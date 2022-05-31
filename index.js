const express = require('express')
const app =express()
const port = 3000;
app.get('/greeting/:name', (req, res)=>{
    res.send(`hello, ${req.params.name}` )
})
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    let tip = (tipPercentage / 100) * total
    res.send(`${tip}`)
    })
app.listen(port, () => {
    console.log('app is running on port: ', port);
});
