const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  let bottles = 99;
  res.send(`
          <h1>${bottles} Bottles of beer on the wall</h1>
          <a href='/${bottles - 1}'>take one down, pass it around</a>
        `);
});

app.get('/:number_of_bottles', (req, res) => {
  const numBottles = parseInt(req.params.number_of_bottles);
  res.send(`
        <h1>${numBottles} Bottles of beer on the wall</h1>
        ${
          numBottles - 1 >= 0
            ? `<a href='/${numBottles - 1}'>take one down, pass it around</a>`
            : `<a href='/'>start over</a>`
        }
        `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
