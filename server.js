const express = require('express');

const router = require('./routers/router.js');

const server = express()

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`Projects Sprint API`)
})

server.use('/api/projects', router);

module.exports = server;