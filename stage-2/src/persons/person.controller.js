const httpStatus = require("http-status");
const Person = require("./person.model");
const personService = require("./person.service");
const catchAsync = require("../utils/catchAsync");

const createPerson = catchAsync(async (req, res) => {
    const person = await personService.createPerson(req.body);
    res.status(httpStatus.CREATED).send(person);
});

const getAllPersons = catchAsync(async (req, res) => {
    const persons = await personService.getAllPersons();
    res.send(persons);
});

const getPerson = catchAsync(async (req, res) => {
    const person = await personService.getPerson(req.params.id);
    res.send(person);
});

const updatePerson = catchAsync(async (req, res) => {
    const person = await personService.updatePerson(req.params.id, req.body);
    res.send(person);
});

const deletePerson = catchAsync(async (req, res) => {
  res.send(await personService.deletePerson(req.params.id));
});

module.exports = {
    createPerson,
    getAllPersons,
    getPerson,
    updatePerson,
    deletePerson,
};
