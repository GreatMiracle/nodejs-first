const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/r1', (req, res) => {
    res.render('sample.ejs');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})



// ---------------------
//code node js thuần::::::::::::::
// const http = require('http');

// // const hostname = '127.0.0.1';
// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
