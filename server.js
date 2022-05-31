const express = require('express');
const app = express();
const port = 3000;

//-----------------------------
//         Greetings
//-----------------------------

// app.get('/greeting/:name', (req, res) => {
//     let person = req.params.name
    
//     res.send("Hello There, " + person)
// })



//-----------------------------
//       Tip Calculator 
//-----------------------------

app.get('/tip/:total/:percentage', (req, res) => {
    let subtotal = req.params.total
    let percent = req.params.percentage

    let tip = subtotal * (percent/100)
    let total = tip + subtotal

    res.send("Your total with tip will be " + total)
})

















app.listen(port, () => {
	console.log('app is running on port: ', port)
});