/*
## Take one Down and Pass it Around

Origins: WDI-DC Campus<br>

Build an express application that enables users to count down the number
of bottles of beer. Don't like beer? Pass around bottles of soda, kombucha, or milk etc.

## Instructions

- `mkdir pass-it-around`
- `cd pass-it-around`
- `npm init -y`
- build a basic express server


### Requirements

- On the home page (`get "/"`), users should see:
  - "99 Bottles of beer on the wall"
  - a link that says "take one down, pass it around"
  - this should link to `/98`, where the number represents the number of bottles left.
- When a number is given in the url (`get "/:number_of_bottles"`), users should see:
  - The number of bottles of beer on the wall (i.e. `98 Bottles of beer on the wall.`)
  - a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
- If there are 0 bottles left, do not show a link to "take one down"
  - Add a link to start over, which directs the user back to the home page.

#### Hints
 - You should use an `anchor` tag with an `href` to link to the next 'page'

#### Bonus

- Have some more fun

Update your page to be something like

```
99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
```

Make the bugs go down by one, but then have some sort of functionality where the bug count can `randomly` go up

You have a lot of freedom to make it work how you want!
*/

const express = require('express')
const app = express()

const port = 1000


app.get('/', (req, res) => {
    let numBottles = 99;
    let totalBottles = numBottles - 1;
    res.send(`${numBottles} bottles of beer on the wall, \n ${numBottles} bottles of beer, \n <a href="/${totalBottles}"> Take one down, \n Pass it around</a>, \n ${totalBottles} bottles of beer on the`)
})

app.get('/:number_of_bottles', (req, res) => {
    let bottlesNum = Number(req.params.number_of_bottles);
    let totalBottles = bottlesNum - 1;
    if(bottlesNum === 0) {
        res.send(`<a href="/">Start Over</a>`)
    }

    else {
        res.send(`${bottlesNum} bottles of beer on the wall, \n ${bottlesNum} bottles of beer, \n <a href="/${totalBottles}"> Take one down, \n Pass it around</a>, \n ${totalBottles} bottles of beer on the`)
    }
})

app.listen(port, () => {
	console.log('app is running on port: ', port)
})