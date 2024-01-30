const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the home page!");
    } else if (req.url === '/about') {
        res.end("Welcome to the about page!");
    } 
        res.end(`<h1>Oops!</h1>
            <p>Sorry, looks like something went wrong</p>
            <a href="/">Home</a>
        `)
    
})

server.listen(5173)