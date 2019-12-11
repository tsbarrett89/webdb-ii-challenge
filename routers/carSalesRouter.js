const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) =>{
    db.select('*').from('sales_details')
        .then(details => {
            res.status(200).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error getting sales details"}))
})

router.post('/', (req, res) => {
    const salesDetails = req.body;

    db('sales_details').insert(salesDetails, 'id')
        .then(details => {
            res.status(201).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error adding sales details"}))
})

router.put('/:id', (req, res) =>{
    const salesDetails = req.body;

    db('sales_details').update(salesDetails, 'id').where({ id: req.params.id })
        .then(details => {
            res.status(201).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error updating sales details"}))
})

router.delete('/:id', (req, res) => {
    db('sales_details').delete().where({ id: req.params.id })
        .then(details => {
            res.status(201).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error deleting sales details"}))
})

module.exports = router