const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Home page")
})


app.get('/about', (req, res) => {
    res.send("About Page")
})


app.all('*', (req, res) => {
    res.status(404).send("Page Not Found")
})

app.listen (3000, () => {
    console.log('listening on port 3000')
})