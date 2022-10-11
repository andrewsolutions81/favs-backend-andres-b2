const router = require('express').Router();
const userController = require('./user.controller');

router.route('/').post(userController.signup);

module.exports = router;
