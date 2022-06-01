const express = require("express")
const app = express()
// lyrics to enter with template literals
const song = [` bottles of beer on the wall, `, ` bottles of beer. `, `Take one down and pass it around,`]
const singleBottle = [` bottle of beer on the wall, `, ` bottle of beer. `]

// Begin with /beers and a link to 98
// template literals with array index references
app.get("/beers", (req, res) => {
    let link = `<a href="http://localhost:3000/98">${song[2]}</a>`
    res.send(`99${song[0]}99${song[1]}${link}`)
})

app.get('/:num' , (req,res)=>{
    // if statement for remaining bottles
    if (req.params.num > 0){
        let num = req.params.num
        let link = `<a href="http://localhost:3000/${req.params.num - 1}">${song[2]}</a>`
        res.send(`${num}${song[0]}${num}${song[1]}${link}`)
    // } else if (req.params.num = 1) {
    //     let num = req.params.num
    //     let link = `<a href="http://localhost:3000/${req.params.num - 1}">${song[2]}</a>`
    //     res.send(`${num}${singleBottle[0]}${num}${singleBottle[1]}${link}`)
    }else {
        res.send(`Who's the DD? We need more beer. <a href="http://localhost:3000/">Just bought some more</a>`)
    }
})



app.listen(3000, () => {
    console.log("Beers")
})