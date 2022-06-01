const expr = require('express');

const app = expr();

app.listen(3000);

app.get('/greeting/:name', (req, res) => {
    let name = req.params.name;
    res.send(`What's up ${name}, it's great to see you!`);
});