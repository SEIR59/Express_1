const expr = require("express")
const app = expr()

const port = 3000

// Take one Down and Pass it Around -
//

// take one down loop page.
app.get("/:number_of_bottles", (req, res) => {
    let num = req.params.number_of_bottles;
    
    if (num > 0){
        res.send(`
    ${num} bottles of beer on the wall<br />
    <a href="http://localhost:3000/${num - 1}">Take one down and pass it around.</a>
    `)
    } else if (num < 0) {
        res.send(`
    Good try but no such luck :)<br />
    <a href="http://localhost:3000/">Start Over</a>
    `)
    } else if (isNaN(num) === true){
        res.send(`
    Good try but no such luck :)<br />
    <a href="http://localhost:3000/">Start Over</a>
    `)
    } else {
        res.send(`
    ${num} bottles of beer on the wall<br />
    <a href="http://localhost:3000/">Start Over</a>
    `)
    }
})
// home page
app.get("/", (req, res) => {
    
    res.send(`
    99 bottles of beer on the wall<br />
    <a href="http://localhost:3000/98">Take one down and pass it around.</a>
    `)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
