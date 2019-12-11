const express = require('express');

const carDetailsRouter = require('./routers/carDetailsRouter.js');
const salesDetailsRouter = require('./routers/carSalesRouter');

const server = express()

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`webdb ii project`)
})

server.use('/api/car-details', carDetailsRouter);
server.use('/api/sales-details', salesDetailsRouter);

module.exports = server;