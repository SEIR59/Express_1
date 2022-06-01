const express = require('express');
const port = 3000;
const app = express();

app.get('/greeting/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
  let { total, tipPercentage } = req.params;
  res.send(`Tip: $${(total * tipPercentage) / 100}`);
});

app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
