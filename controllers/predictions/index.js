const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.index);
router.get('/:user_id', controller.show);
router.post('/:user_id', controller.create);

module.exports = router;
