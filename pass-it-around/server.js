const e = require('express');
const expr = require('express');

const app = expr();

app.listen(3000);

//Beer on the wall
app.get('/', (req, res) => {
        res.send(`99 bottles of beer on the wall <a href="/98">take one down, pass it around</a>`);
});
app.get('/:number_of_bottles', (req, res) => {
    let newNum = parseFloat(req.params.number_of_bottles);
    if(newNum >= 1){
        let nextNewNum = newNum - 1;
        res.send(`${newNum} bottles of beer on the wall <a href="${nextNewNum}">take one down, pass it around</a>`);
    }else{
        res.send(`<a href="/">start over</a>`)
    }
});