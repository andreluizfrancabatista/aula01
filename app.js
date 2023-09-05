const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/', (req, res) => {
    // res.sendFile('Hello world'); // isso gera erro
    res.sendFile(path.join(__dirname, 'index.html')); //isso funciona
});

app.get('/flights/:from-:to', (req, res) => {
    res.send(`Flight from ${req.params.from} to ${req.params.to}`);
});

//404 error page
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log(`Server listen at port ${port}`);
});


