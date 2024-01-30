const express = require('express');

const router = express.Router();

let people = require('../data')

let {
    getPeople,
    deletePeople,
    updatePeople,
    postPeople
} = require('../controllers/people')

router.get('/', getPeople)

router.post('/', postPeople)

router.put('/:id', updatePeople)

router.delete('/:id', deletePeople)

module.exports = router;