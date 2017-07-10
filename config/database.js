const pgpromise = require('pg-promise')();
const localconnection = process.env.DATABASE_URL || 'postgres://localhost:5432/got_predictions'

const db = pgpromise(localconnection);

module.exports = db;
