const express = require('express')

const app = express()

const port = 3000




app.listen(3000, () => {
    console.log("app is running on port: ", port);
})

app.get("/greeting/:name", (req, res) => {
    res.send(`Hi there , ${req.params.name}`);

})
