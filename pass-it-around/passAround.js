const express = require('express')
const app = express()
const port = 4000

app.listen(port, () =>{
    console.log('listening to port 4000')
})

app.get('/:number_of_bottles', (req,res) => {
    if(req.params.number_of_bottles === '1'){
        res.send(`${req.params.number_of_bottles} Bottle of beer on the wall<br>${req.params.number_of_bottles} bottle of beer<a href='/${Number(req.params.number_of_bottles) - 1}'><br>Take one down, pass it around</br></a>`)
    }else if(req.params.number_of_bottles === '0'){
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<br>${req.params.number_of_bottles} bottles of beer`)
    }else{
        res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<br>${req.params.number_of_bottles} bottles of beer<a href='/${Number(req.params.number_of_bottles) - 1}'><br>Take one down, pass it around</br></a>`)
    }
})
