const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) =>{
    db.select('*').from('car_details')
        .then(details => {
            res.status(200).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error getting car details"}))
})

router.post('/', (req, res) => {
    const carDetails = req.body;

    db('car_details').insert(carDetails, 'id')
        .then(details => {
            res.status(201).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error adding car details"}))
})

router.put('/:id', (req, res) =>{
    const carDetails = req.body;

    db('car_details').update(carDetails, 'id').where({ id: req.params.id })
        .then(details => {
            res.status(201).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error updating car details"}))
})

router.delete('/:id', (req, res) => {
    db('car_details').delete().where({ id: req.params.id })
        .then(details => {
            res.status(201).json(details);
        })
        .catch(err => res.status(500).json({errorMessage:"error deleting car details"}))
})

module.exports = router