const db = require('../config/database');

const Prediction = {};

Prediction.findAll = () => {
  db.manyOrNone(`SELECT * FROM predictions`)
}

Prediction.findByUserId = (id) => {
  db.oneOrNone(`SELECT * FROM predictions WHERE user_id = $1`, [id])
}

Prediction.create = (user) => {
  db.none(`INSERT INTO predictions
    (user_id, user_email, predictions) VALUES ($1, $2, $3)`,
    [user.user_id, user.user_email, user.predictions])
}

module.exports = Prediction;
