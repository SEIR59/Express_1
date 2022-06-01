const express = require('express');
const port = 3000;
const app = express();



app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
  });

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
  });