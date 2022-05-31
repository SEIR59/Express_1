/*
## Greetings

2. Make a route `'/greeting'` that sends a generic greeting to the screen like "Hello, stranger".

3. Give the `greeting` route a param `/:name`

4. When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, `<name>`", or "`<name>`! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).
*/

const express = require('express');
const app = express();

const port = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send(`${req.params.name}! It's so greate to see you!`)
})

app.listen(port, () => {
	console.log('app is running on port: ', port)
});

