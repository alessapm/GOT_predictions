const express = require('express');
const router = express.Router();

router.use('/users', require('./controllers/users'));
router.use('/predictions', require('./controllers/predictions'));

module.exports = router;
