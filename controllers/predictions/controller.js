const Prediction = require('../../models/prediction.js');

const controller = {};

controller.index = (req, res) => {
    Prediction.findAll()
    .then((data) => {
      res.send(data)
    })
  .catch((err) => console.log('err: ', err))
}

controller.show = (req, res) => {
  Prediction.findByUserId(req.params.user_id)
  .then((data) => {
    res.send(data)
  })
  .catch(err => console.log('err: ', err))
}

controller.create = (req, res) => {
  console.log('^^^^^in create, req.body: ', req.body)
  Prediction.create(req.body.predictions, req.params.user_id, req.body.email)
  .then(() => {
    console.log('predictions created');
    res.sendStatus(201)
  })
  .catch(err => console.log('create predictions err: ', err))
}

module.exports = controller;
