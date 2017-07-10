const User = require('../../models/user.js');
const bcrypt = require('bcrypt');

const controller = {};

controller.create = (req, res) => {
  User.create(req.body.user)
  .then(() => {
    console.log('controller.create running');
  })
  .catch((err) => console.log('err: ', err))
};

controller.process_login = (req, res) => {
  User.findByEmail(req.body.user.email)
  .then((user) => {
    if (user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
      if (isAuthed) {
        console.log('is Authed is true');
      } else {
        console.log('isAuthed is false');
        res.json({error: "Incorrect email or password"})
      }
    } else {
      console.log('cannot find matching email');
      res.json({error: "Incorrect email or password"})
    }
  })
  .catch((err) => console.log('process login error: ', err))
}

module.exports = controller;
