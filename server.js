const express = require("express")
const app = express();
app.get('/greeting/:name', (req, res) => {
    console.log(req)
    // console.log(req.params)
    res.send('hello' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req)
    // console.log(req.params)
    let decimal = req.params.tipPercentage / 100 
    let tip = req.params.total * decimal
    res.send('tip: ' + tip)
})






app.listen(8000, () => {
    console.log("Listening on port 8000!!!")
})