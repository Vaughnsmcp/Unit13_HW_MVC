'use strict';

const express = require('express');

const router = express.Router();

const burgers = require('../models/burger');

router.get('/', (req, res) => {
    burgers.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burgers.create(['name', 'devoured'], [req.body.name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});
router.put('/api/burgers/:id', (req, res) => {
    const condition = 'id = ' + req.params.id;
    console.log('condition', condition);

    burgers.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }

    );
});


module.exports = router;


