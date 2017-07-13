const db = require('../config/database');

const Prediction = {};

Prediction.findAll = () => {
  return db.manyOrNone(`SELECT * FROM predictions`)
}

Prediction.findByUserId = (id) => {
  return db.oneOrNone(`SELECT * FROM predictions WHERE user_id = $1`, [id])
}

Prediction.create = (predictions, id, email) => {
  // console.log('^&^in create predictions model, id, predictions', id, predictions)
  return db.none(`INSERT INTO predictions
    (user_id, user_email, predictions) VALUES ($1, $2, $3)`,
    [id, email, predictions])
}

module.exports = Prediction;
