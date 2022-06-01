const express = require("express")
const res = require("express/lib/response")

const app = express()

app.listen(3000, () => {
  console.log("success")
})

let bottles = 99
app.get("/", (req, res) => {
    let bottlesLeft = bottles - 1
    res.send(`<p> ${bottles} Bottles of beer on the wall</p>\n<a href="/${bottlesLeft}">Take one down, pass it around<a>`)
})
app.get("/:number_of_bottles", (req, res) => {
    let bottles = Number(req.params.number_of_bottles)
    if (bottles == 0) {
        res.send(`<a href="/"> Start Over </a>`)
    }
    else {
        res.send(`<p>${bottles} Bottles of beer on the wall </p>\n<a href=/${bottles - 1}> Take one down pass it around</a>`)
    }
})