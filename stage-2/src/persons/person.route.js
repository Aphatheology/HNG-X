const express = require('express');
const validate = require('../middleware/validate');
const router = express.Router();
const personController = require('./person.controller');
const personValidation = require('./person.validation');

router
    .route('/')
    .post(
        validate(personValidation.createPerson),
        personController.createPerson
    )
    .get(personController.getAllPersons);

router
    .route('/:id')
    .get(validate(personValidation.getPerson), personController.getPerson)
    .patch(
        validate(personValidation.updatePerson),
        personController.updatePerson
    )
    .delete(
        validate(personValidation.deletePerson),
        personController.deletePerson
    );

module.exports = router;
