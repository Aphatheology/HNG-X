const mongoose = require("mongoose");
const config = require("../config/config");
require("dotenv").config();

const personSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    }
);

personSchema.set("timestamps", true);

module.exports = mongoose.model("Person", personSchema);
