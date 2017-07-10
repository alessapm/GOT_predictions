const Prediction = require('../../models/prediction.js');

const controller = {};

controller.index = (req, res) => {
  if (req.body.user.name === 'admin') {
    Prediction.findAll()
    .then((data) => {
      res.send(data)
    })
  .catch((err) => console.log('err: ', err))
  } else {
    res.send({message: 'this page is unavailable'})
  }
}

controller.show = (req, res) => {
  Prediction.findByUserId(req.params.user_id)
  .then((data) => {
    res.send(data)
  })
  .catch(err => console.log('err: ', err))
}

controller.create = (req, res) => {
  Prediction.create(req.body.user)
  .then(() => console.log('predictions created'))
  .catch(err => console.log('create predictions err: ', err))
}

module.exports = controller;
