const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall <a href="localhost:3000/98">Take one down, pass it around</a>`);
});

app.get('/:number_of_bottles', (req, res) => {
    res.send(req.params.number_of_bottles + ` Bottles of beer on the wall <a href="localhost:3000/${(req.params.number_of_bottles - 1)}">Take one down, pass it around</a>`);
    if (req.params.number_of_bottles === 0) {
        res.send(`<a href="localhost:3000/">Start Over!</a>`)
    }
});

app.listen(port, () => {
    console.log("It's working.");
});