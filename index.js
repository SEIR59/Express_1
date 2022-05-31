const express = require('express')
const app =express()
const port = 3000;
app.get('/greeting/:name', (req, res)=>{
    res.send(`hello, ${req.params.name}` )
})
app.listen(port, () => {
    console.log('app is running on port: ', port);
});
