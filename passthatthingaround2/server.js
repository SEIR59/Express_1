const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    let currentBottle = 99
    let newBottles = currentBottle - 1
    res.send(`${currentBottle} bottles of beer on the wall. <a href='/${newBottles}'>Take one down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    let currentBottle = Number(req.params.number_of_bottles)
    let newBottles = currentBottle - 1
    switch (currentBottle){
        case 0: res.send(`<a href ='/'>There are no bottles left :( Get 99 more bottles?</a>`)
        break

        case 1: res.send(`There is only one bottle of beer left on the wall <a href='/0'>Take it down, pass it around</a>`)
        break

        default: res.send(`${currentBottle} bottles of beer on the wall. <a href='/${newBottles}'>Take one down, pass it around</a>`)
    }
})



app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})