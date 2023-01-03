const express = require('express')
const app = express()
const path = require('path')
const port = 3000


app.get('/', (req, res) => {
    res.sendStatus = 200;
    res.sendFile(path.join(__dirname, './views/index.html' ))
})

app.get('/style.css', (req, res) => {
    res.sendStatus = 200;
    res.sendFile(path.join(__dirname, './views/style.css' ))
})

app.get('/contact', (req, res) => {
    res.sendStatus = 200;
    res.sendFile(path.join(__dirname, './views/contactme.html' ))
})


app.get('/about', (req, res) => {
    res.sendStatus = 200;
    res.sendFile(path.join(__dirname, './views/about.html' ))
})

app.get('*', (req, res) => {
    res.sendStatus = 200;
    res.sendFile(path.join(__dirname, './views/404.html' ))
})

app.listen(port)