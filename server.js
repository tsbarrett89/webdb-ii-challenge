const express = require('express');

const router = require('./routers/router.js');

const server = express()

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`webdb ii project`)
})

server.use('/api/carDetails', router);

module.exports = server;