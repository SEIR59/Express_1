const express = require('express');
const app = express();



const port = 3000;

app.listen(port, (req,res) => { 
    console.log("working" )
  
})


//===== GREETINGS =====//
app.get('/greeting/:name',(req,res) => {
    console.log(req.params)
    res.send("Hello, It's so great to see you! " + req.params.name)
})


//===== Tip Calculator =====//
app.get('/tip/:total/:tipPercentage',(req,res) => {

let tip = parseInt(req.params.total)*(parseInt(req.params.tipPercentage)/100)

res.send(tip.toString())
})
