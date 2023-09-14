const Joi = require("joi");
const { objectId } = require("../utils/custom.validation");

const createPerson = {
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

const getPerson = {
    params: Joi.object().keys({
        id: Joi.string().required().custom(objectId),
    })
}

const updatePerson = {
    params: Joi.object().keys({
      id: Joi.string().required().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

const deletePerson = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
};
