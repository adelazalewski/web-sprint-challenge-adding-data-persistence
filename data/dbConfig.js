// Complete your db configuration using the `environment` variable.
const knex = require("knex");
const knexfile = require("../knexfile");
const environment = process.env.NODE_ENV || "development";


module.exports = knex(knexfile[environment])