var config_db = require("./config_db");

const { Client } = require('pg');
const client = new Client(config_db);
client.connect();

module.exports = client;