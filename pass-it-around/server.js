const express = require('express')
const app = express()
const port = 3000

// ******** TAKE ONE DOWN AND PASS IT AROUND *********

//the question mark at the end of my parameters allows the numBottles to be 99 if no parameters are passed
app.get('/:numberOfBottles?', (req, res) => {
    numBottles = (!req.params.numberOfBottles) ?  99 : Number(req.params.numberOfBottles)

    res.write(`<p>${numBottles} Bottles of beer on the wall.</p>`)
    res.write(`<p>${numBottles} Bottles of beer.</p>`)
    res.write(`<p>Take one down, pass it around,</p>`)
    res.write(`<a href="/${numBottles !== 0 ? numBottles -1 : 99}"> ${numBottles !== 0 ? numBottles -1 : 99} Bottles of beer on the wall</a>`)
    res.send()
})


app.listen(port, () => {
    console.log('pass-it-around app is running on port: ', port)
})