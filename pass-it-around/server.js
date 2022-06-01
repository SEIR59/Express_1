const expr = require('express')
const app = expr()



app.get('/', (req, res) => {
    res.send("99 Bottles of beer on the wall" + `<a href="/98">take one down, pass it around</a>`)
})

app.get("/:number_of_bottles", (req, res) => {
    let count = Number(req.params.number_of_bottles)
    if (count === 0) {
        res.send(`<a href= '/'>start over</a>`)
    } else {
        res.send(`${count} Bottles of beer on the wall` + `<a href="/${count - 1}">take one down, pass it around</a>`)
    }
})




app.listen(8000, () => {
    console.log("Listening on port 8000!!!")
})