const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/flights/:from-:to', (req, res) => {
    res.send(`Flight from ${req.params.from} to ${req.params.to}`);
});

app.listen(port, () => {
    console.log(`Server listen at port ${port}`);
});