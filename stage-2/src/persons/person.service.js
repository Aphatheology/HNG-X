const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const Persons = require('./person.model');

const createPerson = async (personBody) => {
    const newPerson = await Persons.create(personBody);
    return newPerson;
};

const getAllPersons = async () => {
    const persons = await Persons.find();

    return persons;
};

const getPerson = async (id) => {
    const person = await Persons.findOne({ _id: id });

    if (!person) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Person not found');
    }

    return person;
};

const updatePerson = async (id, personBody) => {
    let personToUpdate = await getPerson(id);

    personToUpdate = await Persons.findOneAndUpdate({ _id: id }, personBody, {
        returnDocument: 'after',
    });

    return personToUpdate;
};

const deletePerson = async (id) => {
    const personToDelete = await getPerson(id);

    const deletedPerson = await Persons.findOneAndDelete({ _id: id });

    if (!deletedPerson) {
        throw new Error('Failed to delete person');
    }

    return;
};

module.exports = {
    createPerson,
    getAllPersons,
    getPerson,
    updatePerson,
    deletePerson,
};
