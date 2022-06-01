const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (req,res) => { 
    console.log("working" )
})

app.get('/',(req,res) => {
    // res.send(" 99 bottles of beer on the wall!<br/>"+`<a href="/98"> Take one down, pass it around</a>`)
    res.send(" 99 little bugs in the code<br/>99 little bugs<br/>Take on down<br/>Patch it around<br/>127 bugs in the code<br/>"+`<a href="/98"> Take one down, pass it around</a>`)
})



app.get('/:number_of_bottles',(req,res) => {
    let number = parseInt(req.params.number_of_bottles)
    let random = Math.floor(Math.random()*30+1)
  if(number === 0){
      res.send(`<a href="/">Going back to Home</a>`)
  }else{
    res.send( number + " little bugs in the code<br/>"+ `${number}little bugs<br/>Take on down<br/>Patch it around<br/>` + `${random+127}bugs in the code<br/>`+`<a href='/${number-1}'> Take one down, pass it around</a>`)
  }
})


