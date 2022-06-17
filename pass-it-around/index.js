const express =  require('express')
const app = express()
const port = 2000

app.get('/', (req, res)=>{
    res.send('99 bottles of beer on the wall, 99 bottles of beer!<a href="/98">Take one down pass it around.</a>')
})

app.get('/:id', (req, res)=>{
    let nextBottle = parseInt(req.params.id) - 1
    console.log(nextBottle)
    res.send(req.params.id + ' Bottles of beer on the wall!' + `<a href="/${nextBottle}">Take one down pass it around.</a>`)
})

app.listen(port, () => {
    console.log('the port is running on ' + port)
})