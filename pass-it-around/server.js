const express = require('express')
const app = express()
const port = 3000

const verses = [
` bottles of beer on the wall, `,
 ` bottles of beer!`,
`Take one down, pass it around...`]

const newVerses = [
` tiny little bug in the code... `,
`Click me to fix it!`

]

app.get('/' , (req,res)=>{
    let link = `<a href="http://localhost:3000/98">${verses[2]}</a>`
    res.send(`99${verses[0]}99${verses[1]}${link}`)
})

app.get('/:num' , (req,res)=>{
    if (req.params.num>0){
        let num = req.params.num
        let link = `<a href="http://localhost:3000/${req.params.num - 1}">${verses[2]}</a>`
        res.send(`${num}${verses[0]}${num}${verses[1]}${link}`)
    }else{
        res.send(`We need to go to the store... *hiccup* <a href="http://localhost:3000/">Restart here!</a>`)
    }
})

app.listen(port, ()=>{
    console.log('in the port')
})