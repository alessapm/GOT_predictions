const db = require('../config/database');

const Prediction = {};

Prediction.findAll = () => {
  db.manyOrNone(`SELECT * FROM predictions`)
}

Prediction.findByUserId = (id) => {
  db.oneOrNone(`SELECT * FROM predictions WHERE user_id = $1`, [id])
}

Prediction.create = (predictions, id, email) => {
  // console.log('^&^in create predictions model, id, predictions', id, predictions)
  db.none(`INSERT INTO predictions
    (user_id, user_email, predictions) VALUES ($1, $2, $3)`,
    [id, email, predictions])
}

module.exports = Prediction;
