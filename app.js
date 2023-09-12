const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const example = require('./example.json')

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', example);
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
    console.log(example);
});


