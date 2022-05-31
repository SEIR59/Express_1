const express = require('express')
const app =express()
const port = 3000;
app.get('/', (req, res)=>{
res.send(`<h1>99 Bottles of beer on the wall <a href="/98"> take one down, pass it around</a></h1>`)
})

app.get('/:number_of_bottles', (req, res)=>{
    let bottle = req.params.number_of_bottles
    //res.send(`${bottle}  Bottles of beer on the wall`)

if(bottle === '0' ){
    res.send(`<h1><a href="/">Start over</a></h1>`)
}else{
    res.send(`<h1>${bottle}  Bottles of beer on the wall<a href="/${bottle - 1}">take one down, pass it around</a></h1>`)

}


})






app.listen(port, () => {
    console.log('app is running on port: ', port);
});
