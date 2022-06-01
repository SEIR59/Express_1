const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (req,res) => { 
    console.log("working" )
})

app.get('/',(req,res) => {
    res.send(" 99 bottles of beer on the wall!<br/>"+`<a href="/98"> Take one down, pass it around</a>`)

})



app.get('/:number_of_bottles',(req,res) => {
    let number = parseInt(req.params.number_of_bottles)
  if(number === 0){
      res.send(`<a href="/">Going back to Home</a>`)
  }else{
    res.send( number + " Bottles of beer on the wall!<br/> "+ `<a href='/${number-1}'> Take one down, pass it around</a>`)
  }
})


