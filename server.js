const express = require('express');

const router = require('./routers/carDetailsRouter.js');

const server = express()

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`webdb ii project`)
})

server.use('/api/car-details', router);

module.exports = server;